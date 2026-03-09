import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroData, socialLinks } from '../constants';
import { openEmail } from '../utils/openEmail';

const Hero = ({ onOpenCV, onOpenHire }) => {
    // Stagger container for the main text block
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // Letter-by-letter animation for greeting
    const greetingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
    };

    // Hero title "React" animation
    const titleVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1
            }
        }
    };

    // Standard fade-up for other elements
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative px-6 overflow-hidden">

            {/* Ambient Title Glow for Load */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"
            />

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                        <span className="text-sm text-emerald-100/80 font-medium tracking-wide">{heroData.badgeText}</span>
                    </motion.div>

                    {/* Heading */}
                    <div className="space-y-2 relative">
                        {/* Greeting: Letter by Letter */}
                        <motion.h2 variants={greetingVariants} className="text-xl text-emerald-400 font-medium tracking-wide pl-1 overflow-hidden">
                            {heroData.greeting.split("").map((char, index) => (
                                <motion.span key={index} variants={letterVariants} className="inline-block">
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h2>

                        <div className="relative">
                            {/* "React" - Glow & Scale */}
                            <motion.h1
                                variants={titleVariants}
                                className="text-5xl md:text-7xl font-bold leading-tight relative z-10"
                            >
                                <span className="text-white block pb-2">
                                    {heroData.rolePrefix}
                                </span>
                                {/* Background Pulse for "React" */}
                                <motion.div
                                    className="absolute -inset-4 bg-emerald-500/20 blur-xl rounded-full z-[-1]"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.h1>

                            {/* "Developer" - Slide Up */}
                            <motion.span
                                variants={fadeUpVariants}
                                className="block text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-600 animate-gradient-x bg-[length:200%_auto]"
                            >
                                {heroData.roleSuffix}
                            </motion.span>
                        </div>
                    </div>

                    {/* Description - Fade In */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-emerald-500/30 pl-6"
                    >
                        {heroData.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 pt-2">
                        <button
                            onClick={onOpenHire}
                            className="group relative flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-medium overflow-hidden shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/20 transition-all hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10">{heroData.ctaPrimary}</span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={onOpenCV}
                            className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all hover:border-emerald-500/30 hover:-translate-y-1"
                        >
                            {heroData.ctaSecondary}
                            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform text-emerald-400" />
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={fadeUpVariants} className="flex items-center gap-6 pt-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target={social.name === 'Email' ? undefined : '_blank'}
                                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                    onClick={social.name === 'Email' ? (e) => openEmail('hameedullahaptech@gmail.com', e) : undefined}
                                    className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                                >
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
                >
                    {/* Abstract Background Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-[80px] animate-pulse-slow" />

                    <motion.div
                        whileHover={{ rotateY: 5, rotateX: 5 }}
                        className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl group"
                    >
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020403] via-transparent to-transparent z-10 opacity-80" />

                        <img
                            src={heroData.image}
                            alt="Developer"
                            fetchpriority="high"
                            decoding="async"
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        />


                        {/* Floating Card */}
                        {/* <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 z-20 shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xl ring-1 ring-emerald-500/30">
                                    {heroData.yearsExperience}
                                </div>
                                <div>
                                    <p className="text-white font-bold">{heroData.experienceText}</p>
                                    <p className="text-sm text-gray-400">{heroData.experienceSubText}</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
                onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}

            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-bold group-hover:text-emerald-400 transition-colors">
                    Scroll Down
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-8 h-12 rounded-full border-2 border-emerald-500/20 flex items-start justify-center p-2 group-hover:border-emerald-500/40 transition-colors"
                >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </motion.div>
                <ChevronDown className="w-4 h-4 text-emerald-500/40 group-hover:text-emerald-400 group-hover:translate-y-1 transition-all" />
            </motion.div>
        </section>
    );
};

export default Hero;
