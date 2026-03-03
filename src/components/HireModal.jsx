import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Linkedin, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

const contacts = [
    {
        id: 'email',
        icon: Mail,
        label: 'Email',
        sub: 'hameedullahaptech@gmail.com',
        href: 'mailto:hameedullahaptech@gmail.com',
        accent: '#10b981',
    },
    {
        id: 'whatsapp',
        icon: MessageCircle,
        label: 'WhatsApp',
        sub: '+92 317 8172876',
        href: 'https://wa.me/923178172876?text=Hi%20Hameed%2C%20I%20want%20to%20hire%20you!',
        accent: '#10b981',
    },
    {
        id: 'linkedin',
        icon: Linkedin,
        label: 'LinkedIn',
        sub: 'hameed-ullah-3b4a13343',
        href: 'https://www.linkedin.com/in/hameed-ullah-3b4a13343',
        accent: '#10b981',
    },
];

const HireModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const fn = (e) => { if (e.key === 'Escape') onClose(); };
        if (isOpen) window.addEventListener('keydown', fn);
        return () => window.removeEventListener('keydown', fn);
    }, [isOpen, onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center p-4"
                    style={{ zIndex: 99999 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal Card */}
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <h2 className="text-xl font-bold text-white mb-2">Let's Work Together</h2>
                            <p className="text-gray-400 text-sm mb-6">
                                Feel free to reach out for collaborations or inquiries.
                            </p>

                            <div className="space-y-3">
                                {contacts.map((c) => (
                                    <a
                                        key={c.id}
                                        href={c.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/50 transition-all group"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-emerald-500">
                                                <c.icon size={22} />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium text-sm leading-none mb-1">{c.label}</p>
                                                <p className="text-gray-500 text-xs">{c.sub}</p>
                                            </div>
                                        </div>
                                        <ArrowUpRight size={16} className="text-gray-600 group-hover:text-emerald-500 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="px-8 py-4 bg-white/[0.02] border-t border-white/5 text-center">
                            <p className="text-gray-500 text-[11px] uppercase tracking-widest font-medium">
                                Available for new projects
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HireModal;
