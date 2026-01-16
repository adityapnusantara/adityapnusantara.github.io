'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Loader2, Send, ShieldCheck, MessageCircle, X } from 'lucide-react';
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
    const [isOpen, setIsOpen] = useState(false);

    // Set initial open state based on screen width
    useEffect(() => {
        // Open by default on desktop (>= 768px), closed on mobile
        if (window.innerWidth >= 768) {
            setIsOpen(true);
        }
    }, []);
    // Use n8n webhook URL directly
    const agentEndpoint = 'https://n8n-azy7zvkpmcor.ceri.sumopod.my.id/webhook/e736d813-ecda-44c2-8c7a-da5d1eb547e9';

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

        setMessages(prev => [...prev, { id: generateId('msg'), sender: 'user', text: trimmed }]);
        setInput('');
        setIsSending(true);
        setError('');

        const payload = {
            message: trimmed,
            sessionId: sessionId || localStorage.getItem(SESSION_STORAGE_KEY),
        };

        try {
            const response = await fetch(agentEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData?.message || t.agentChat.error);
            }

            const data = await response.json();

            // Handle n8n response structure
            const agentReply = data.output || data.text || data.message || (Array.isArray(data) && data[0]?.output) || t.agentChat.emptyResponse;

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
        <div id="agent-chat" className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-[320px] sm:w-[380px] bg-[#041c3b]/95 border border-cyan-500/15 rounded-2xl shadow-2xl shadow-cyan-500/20 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
                                    <Bot size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span>{t.agentChat.name || 'Agent Introduction'}</span>
                                    <span className="text-xs text-cyan-100/70">{t.agentChat.title}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg text-cyan-100 hover:text-white hover:bg-white/10"
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="px-4 pt-3 text-sm text-cyan-100/80">
                            {t.agentChat.subtitle}
                        </div>

                        <div
                            className="px-4 py-3 space-y-4 max-h-[360px] overflow-y-auto"
                            ref={messagesContainerRef}
                        >
                            {messages.map((message) => (
                                <div key={message.id} className={cn('flex', message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                    <div
                                        className={cn(
                                            'max-w-[90%] rounded-2xl px-3 py-2 text-sm shadow-lg',
                                            message.sender === 'user'
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                                : 'bg-white/5 border border-cyan-500/10 text-cyan-50'
                                        )}
                                    >
                                        <div className="flex items-center gap-2 mb-1 text-[11px] uppercase tracking-wide">
                                            {message.sender === 'user' ? <ShieldCheck size={12} /> : <Bot size={12} />}
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
                            {error && (
                                <div className="text-sm text-red-200 bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-xl">
                                    {error}
                                </div>
                            )}
                        </div>

                        <div className="px-4 pb-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
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
                                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-xl font-semibold shadow-md shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                                    {isSending ? t.agentChat.waiting : t.agentChat.send}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 border border-white/10"
            >
                <MessageCircle size={18} />
                {isOpen ? 'Hide' : t.agentChat.title}
            </motion.button>
        </div>
    );
}
