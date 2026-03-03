import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Tag } from 'lucide-react';
import { projects } from '../constants';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                {/* Modal Box */}
                <motion.div
                    className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
                    initial={{ opacity: 0, scale: 0.85, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 40 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                >
                    {/* Modal Image */}
                    <div className="relative h-56 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-emerald-500/30 hover:border-emerald-400 transition-all"
                        >
                            <X size={18} />
                        </button>

                        {/* Title overlay */}
                        <div className="absolute bottom-4 left-6">
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 space-y-5">
                        {/* Description */}
                        <div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Tag size={14} className="text-emerald-400" />
                                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                                    Technologies
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/10" />

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 pt-1">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
                            >
                                <Github size={16} />
                                Source Code
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
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
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
