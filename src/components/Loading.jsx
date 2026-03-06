import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#020403]">
            <div className="relative">
                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <div className="relative flex flex-col items-center gap-4">
                    <motion.div
                        className="w-16 h-16 border-t-2 border-r-2 border-emerald-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-500 font-medium tracking-widest text-sm uppercase"
                    >
                        Loading Experiences
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
