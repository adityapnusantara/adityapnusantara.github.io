'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Loader2, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type ChatMessage = {
    id: string;
    sender: 'user' | 'agent';
    text: string;
};

const SESSION_STORAGE_KEY = 'agent_chat_session_id';
const USER_ID = 'user';

const generateId = (prefix: string) => `${prefix}-${crypto.randomUUID?.() ?? Date.now()}`;

export default function AgentChat() {
    const { t } = useLanguage();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);
    const agentEndpoint = process.env.NEXT_PUBLIC_AGENT_API_URL;

    // Initialize session/user ids and seed welcome message
    useEffect(() => {
        const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);

        if (storedSession) {
            setSessionId(storedSession);
        } else {
            const newSession = generateId('session');
            setSessionId(newSession);
            localStorage.setItem(SESSION_STORAGE_KEY, newSession);
        }
    }, []);

    useEffect(() => {
        setMessages(prev => prev.length ? prev : [{
            id: generateId('msg'),
            sender: 'agent',
            text: t.agentChat.welcome
        }]);
    }, [t.agentChat.welcome]);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages.length]);

    const handleSend = async () => {
        const trimmed = input.trim();
        if (!trimmed || isSending) return;

        if (!sessionId) {
            const newSession = generateId('session');
            setSessionId(newSession);
            localStorage.setItem(SESSION_STORAGE_KEY, newSession);
        }

        if (!agentEndpoint) {
            // Gracefully respond when endpoint is not configured, preserving the user's message
            setMessages(prev => {
                const userMsg: ChatMessage = { id: generateId('msg'), sender: 'user', text: trimmed };
                const agentMsg: ChatMessage = { id: generateId('msg'), sender: 'agent', text: t.agentChat.missingEndpoint };
                return [...prev, userMsg, agentMsg];
            });
            setInput('');
            setIsSending(false);
            setError('');
            return;
        }

        setMessages(prev => [...prev, { id: generateId('msg'), sender: 'user', text: trimmed }]);
        setInput('');
        setIsSending(true);
        setError('');

        const payload = {
            input: trimmed,
            user_id: USER_ID,
            session_id: sessionId || localStorage.getItem(SESSION_STORAGE_KEY),
        };

        try {
            const response = await fetch(agentEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(data?.error || t.agentChat.error);
            }

            const agentReply = data?.reply || data?.message || data?.answer || data?.response || t.agentChat.emptyResponse;
            setMessages(prev => [...prev, { id: generateId('msg'), sender: 'agent', text: String(agentReply) }]);
        } catch (err) {
            console.error(err);
            const message = err instanceof Error ? err.message : t.agentChat.error;
            setError(message);
        } finally {
            setIsSending(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <section id="agent-chat" className="py-20 relative overflow-hidden bg-[#031b36]/50">
            <div className="absolute -left-10 top-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] -z-10" />
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-100 text-xs font-semibold">
                        <Sparkles size={14} className="text-cyan-300" />
                        API powered agent
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{t.agentChat.title}</h2>
                </div>
                <p className="text-cyan-100/80 mt-2 max-w-3xl mb-8">{t.agentChat.subtitle}</p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#041c3b]/80 border border-cyan-500/15 rounded-2xl p-6 md:p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-lg"
                >
                    <div
                        className="space-y-4 max-h-[420px] overflow-y-auto pr-1"
                        ref={messagesContainerRef}
                    >
                        {messages.map((message) => (
                            <div key={message.id} className={cn('flex', message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                <div
                                    className={cn(
                                        'max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-lg',
                                        message.sender === 'user'
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                            : 'bg-white/5 border border-cyan-500/10 text-cyan-50'
                                    )}
                                >
                                    <div className="flex items-center gap-2 mb-1 text-xs uppercase tracking-wide">
                                        {message.sender === 'user' ? <ShieldCheck size={14} /> : <Bot size={14} />}
                                        <span className="opacity-80">{message.sender === 'user' ? 'You' : t.agentChat.name || 'Agent'}</span>
                                    </div>
                                    <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                </div>
                            </div>
                            ))}
                        {isSending && (
                            <div className="flex items-center gap-3 text-cyan-100/70 text-sm">
                                <Loader2 size={16} className="animate-spin" />
                                {t.agentChat.waiting}
                            </div>
                        )}
                    </div>

                    {error && (
                        <div className="mt-4 text-sm text-red-200 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-xl">
                            {error}
                        </div>
                    )}

                    <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            rows={2}
                            placeholder={t.agentChat.inputPlaceholder}
                            className="flex-1 bg-transparent outline-none border-none text-white placeholder:text-cyan-100/50 resize-none"
                            disabled={isSending}
                        />
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            onClick={handleSend}
                            disabled={isSending || !input.trim()}
                            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            {isSending ? t.agentChat.waiting : t.agentChat.send}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
