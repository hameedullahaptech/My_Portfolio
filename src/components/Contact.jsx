import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { contactData } from '../constants';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {contactData.heading}
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            {contactData.description}
                        </p>

                        <div className="space-y-8">
                            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07]">
                                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                    <Mail className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email Me</h4>
                                    <a href={`mailto:${contactData.email}`} className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                                        {contactData.email}
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07]">
                                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                    <Phone className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Call Me</h4>
                                    <a href={`tel:${contactData.phone}`} className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                                        {contactData.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07]">
                                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Location</h4>
                                    <p className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                                        {contactData.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative premium-glass p-8 rounded-[2rem] overflow-hidden"
                    >
                        {/* Glow effect inside card */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none" />

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">{contactData.formLabels.name}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-600 backdrop-blur-sm hover:border-white/20"
                                        placeholder="Hameed Ullah"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">{contactData.formLabels.email}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-600 backdrop-blur-sm hover:border-white/20"
                                        placeholder="hameedullahaptech@gmail.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">{contactData.formLabels.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-600 backdrop-blur-sm hover:border-white/20"
                                    placeholder="Project Name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">{contactData.formLabels.message}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-600 resize-none backdrop-blur-sm hover:border-white/20"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10">{contactData.formLabels.button}</span>
                                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
