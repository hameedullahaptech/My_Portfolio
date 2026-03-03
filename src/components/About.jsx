import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutHighlights as highlights, aboutData } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-emerald-400 mb-2 uppercase">About Me</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {aboutData.heading.split('simple, beautiful').map((part, i) => (
                                <span key={i}>
                                    {part}
                                    {i === 0 && <span className="text-emerald-400">simple, beautiful</span>}
                                </span>
                            ))}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
                            {aboutData.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10" />
                            <img
                                src={aboutData.image}
                                alt="Working on code"
                                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-600/20 rounded-full blur-2xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/20 rounded-full blur-2xl" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
