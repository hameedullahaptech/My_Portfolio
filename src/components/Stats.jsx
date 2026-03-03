import { motion } from 'framer-motion';
import { stats } from '../constants';

const Stats = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors group"
                        >
                            <div className="p-3 bg-emerald-500/10 rounded-xl mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                <stat.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
