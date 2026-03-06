import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Tag, ArrowLeft } from 'lucide-react';
import { projects } from '../constants';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                {/* Modal Box */}
                <motion.div
                    className="relative z-10 w-full max-w-2xl bg-[#0f172a] md:rounded-2xl overflow-hidden shadow-2xl border-white/10 md:border h-full md:h-auto md:max-h-[90vh] flex flex-col"
                    initial={{ opacity: 0, scale: 1, y: '100%' }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1, y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                    {/* Sticky Header (Mobile & Desktop) */}
                    <div className="sticky top-0 z-30 bg-[#0f172a]/90 backdrop-blur-lg border-b border-white/10 p-4 flex items-center justify-between">
                        <button
                            onClick={onClose}
                            className="flex items-center gap-1.5 text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Back
                        </button>
                        <h3 className="text-white font-bold truncate px-4 text-sm md:text-base">{project.title}</h3>
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="overflow-y-auto custom-scrollbar flex-1 pb-32">
                        {/* Modal Image */}
                        <div className="relative h-56 md:h-72 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 space-y-8">
                            {/* Description */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em]">Project Overview</h4>
                                <div className="text-gray-300 text-base leading-relaxed space-y-4">
                                    {project.description.split('\n\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Tag size={14} className="text-emerald-400" />
                                    <span className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em]">
                                        Technologies
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Back Button at Bottom of text */}
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 py-4 text-emerald-400 font-semibold hover:text-emerald-300 transition-all border-t border-white/5 mt-4"
                            >
                                <ArrowLeft size={18} />
                                Back to All Projects
                            </button>
                        </div>
                    </div>

                    {/* Sticky Footer Action Buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0f172a] via-[#0f172a] to-transparent z-20">
                        <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#1e293b]/80 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-xl">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold transition-all active:scale-95"
                            >
                                <Github size={18} />
                                Source
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <>
            <section id="projects" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                            <p className="text-gray-400 max-w-xl">
                                A selection of projects that demonstrate my passion for building solving real-world problems with code.
                            </p>
                        </div>
                        <button className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors flex items-center gap-2 group">
                            View All Projects
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-2 flex flex-col"
                            >
                                {/* Image */}
                                <div
                                    className="relative h-48 overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3
                                        className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description — show summary with clamp */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[3rem]">
                                        {project.description || "No description available."}
                                    </p>

                                    {/* Read More Button */}
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="self-start flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-4 group/btn transition-colors"
                                    >
                                        Read More
                                        <ArrowRight
                                            size={13}
                                            className="group-hover/btn:translate-x-1 transition-transform"
                                        />
                                    </button>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                                        >
                                            <Github size={16} /> Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
};

export default Projects;
