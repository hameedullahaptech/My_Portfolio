import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { contactData } from '../constants';
import { openEmail } from '../utils/openEmail';
import WhatsAppIcon from '../utils/WhatsAppIcon';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white via-emerald-400 to-gray-400 bg-clip-text text-transparent">
                        {contactData.heading}
                    </h2>
                    <p className="text-gray-400 text-xl mb-16 leading-relaxed max-w-2xl mx-auto">
                        {contactData.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <a
                            href={`mailto:${contactData.email}`}
                            onClick={(e) => openEmail(contactData.email, e)}
                            className="block group cursor-pointer"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07] flex flex-col items-center gap-4 h-full"
                            >
                                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                    <Mail className="w-8 h-8 text-emerald-400" />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-white font-semibold text-lg mb-2">Email Me</h4>
                                    <span className="text-gray-400 group-hover:text-emerald-400 transition-colors block break-all text-sm md:text-base">
                                        {contactData.email}
                                    </span>
                                </div>
                            </motion.div>
                        </a>

                        <a
                            href={contactData.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group cursor-pointer"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07] flex flex-col items-center gap-4 h-full"
                            >
                                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                    <WhatsAppIcon className="w-8 h-8 text-emerald-400" />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-white font-semibold text-lg mb-2">WhatsApp ME</h4>
                                    <span className="text-gray-400 group-hover:text-emerald-400 transition-colors block text-sm md:text-base">
                                        {contactData.phone}
                                    </span>
                                </div>
                            </motion.div>
                        </a>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07] flex flex-col items-center gap-4"
                        >
                            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                <MapPin className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div className="w-full">
                                <h4 className="text-white font-semibold text-lg mb-2">Location</h4>
                                <p className="text-gray-400 group-hover:text-emerald-400 transition-colors text-sm md:text-base">
                                    {contactData.location}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
