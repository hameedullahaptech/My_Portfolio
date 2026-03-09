import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Phone, MapPin, Globe, Github, Linkedin,
    Briefcase, GraduationCap, Code2, Cpu, Download, X
} from 'lucide-react';
import { openEmail } from '../utils/openEmail';

// ─── CV Data ───────────────────────────────────────────────────────────────
const cvData = {
    name: "Hameed Ullah",
    title: "Full Stack Developer",
    email: "hameedullahaptech@gmail.com",
    phone: "+92 317 8172876",
    location: "Karachi, Pakistan",
    website: "hameedullah.vercel.app",
    github: "github.com/hameedullahaptech",
    linkedin: "www.linkedin.com/in/hameed-ullah-3b4a13343",
    summary:
        "Results-driven Full Stack Developer with 2+ years of experience building high-performance web applications. Expert in React.js, Node.js, Express.js, and cloud deployments. Passionate about clean code, scalable architecture, and delivering exceptional user experiences.",
    experience: [
        {
            role: "Full Stack Developer",
            company: "Freelance / Remote",
            period: "2023 – Present",
            points: [
                "Built and deployed 15+ production-grade web apps using React.js, Node.js, and Express.js.",
                "Designed RESTful APIs and integrated third-party services for e-commerce and SaaS platforms.",
                "Improved application performance by 40% through code splitting, lazy loading, and caching.",
                "Collaborated with international clients to deliver pixel-perfect, responsive UIs.",
            ],
        },
        {
            role: "Junior Web Developer",
            company: "Tech Solutions Pvt. Ltd.",
            period: "2023 – 2024",
            points: [
                "Developed dynamic dashboards with real-time analytics using React and Recharts.",
                "Maintained SQL Server databases and optimized complex queries for reporting.",
                "Assisted in architecting a hotel management system with role-based access control.",
            ],
        },
    ],
    education: [
        {
            degree: "Software Engineering  — Computer Science",
            institution: "Aptech of Karachi",
            period: " 2023 - 2026",
        },
    ],
    skills: {
        Frontend: ["React.js", "Next.js", "Angular", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"],
        Backend: ["Node.js", "Express.js", "REST APIs", "Python"],
        Database: ["MongoDB", "SQL Server", "MySQL"],
        "DevOps & Tools": ["Git & GitHub", "Docker", "AWS", "Vercel", "Postman"],
    },
    projects: [
        {
            name: "Hotel Management System",
            tech: "React, Node.js, MongoDB, Tailwind",
            desc: "Real-time admin dashboard with inventory management, sales analytics, and role-based access.",
            url: "frontend-seven-roan-54.vercel.app",
        },
        {
            name: "Fitness Tracking App",
            tech: "React.js, MongoDB, Next.js, Tailwind",
            desc: "Full-featured social fitness platform with workout tracking, friend interactions, and feeds.",
            url: "fitness-hameed.vercel.app",
        },
        {
            name: "E-Commerce Website",
            tech: "React.js, Node.js, SQL Server",
            desc: "Full e-commerce platform with product listings, cart management, and payment integration.",
            url: "ecommercehameed.runasp.net",
        },
        {
            name: "Online Post Office System",
            tech: "React.js, Node.js, SQL Server",
            desc: "Digital post office management system with parcel tracking and automated notifications.",
            url: "hameedofficemanagement.runasp.net",
        },
    ],
    languages: ["Urdu (Native)", "English (Professional)"],
};

// ─── Section Title ─────────────────────────────────────────────────────────
const SectionTitle = ({ icon: Icon, title, small }) => (
    <div className="flex items-center gap-2 pb-1.5 border-b border-gray-200">
        <Icon size={small ? 13 : 15} className="text-emerald-600" />
        <h3 className={`font-bold text-gray-800 uppercase tracking-wider ${small ? 'text-[10px]' : 'text-xs'}`}>
            {title}
        </h3>
    </div>
);

// ─── CV Page Layout ────────────────────────────────────────────────────────
const CVPage = ({ cvRef, onClose, onDownload }) => (
    <div
        ref={cvRef}
        id="cv-print-area"
        style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}
        className="bg-white text-gray-900 w-[794px] mx-auto"
    >
        {/* ── HEADER (dark navy — matches portfolio theme) ── */}
        <div className="bg-[#0f172a] text-white px-10 py-8 flex items-start justify-between gap-6">
            <div className="flex-1">
                <h1 className="text-4xl font-bold tracking-tight">{cvData.name}</h1>
                <p className="text-emerald-400 text-lg font-medium mt-1">{cvData.title}</p>
                <p className="text-gray-300 text-sm mt-3 max-w-lg leading-relaxed">{cvData.summary}</p>
            </div>

            {/* Right side: monogram + action buttons */}
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
                {/* Monogram */}
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-400">HU</span>
                </div>

                {/* Action buttons — inside header, perfectly matched */}
                <div className="flex items-center gap-2 no-print">
                    <button
                        onClick={onDownload}
                        className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-emerald-900/40"
                    >
                        <Download size={13} />
                        Download PDF
                    </button>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>
            </div>
        </div>

        {/* ── CONTACT BAR (emerald green) ── */}
        <div className="bg-emerald-600 px-10 py-2.5 flex flex-wrap gap-x-5 gap-y-1 text-white text-[11px]">
            {[
                { icon: Mail, val: cvData.email },
                { icon: Phone, val: cvData.phone },
                { icon: MapPin, val: cvData.location },
                { icon: Globe, val: cvData.website },
                { icon: Github, val: cvData.github },
                { icon: Linkedin, val: cvData.linkedin },
            ].map(({ icon: Icon, val }) => (
                <span key={val} className="flex items-center gap-1.5">
                    <Icon size={11} />
                    {val === cvData.email ? (
                        <a 
                            href={`mailto:${val}`} 
                            onClick={(e) => openEmail(val, e)}
                            className="hover:text-white transition-colors underline underline-offset-2"
                        >
                            {val}
                        </a>
                    ) : (
                        val
                    )}
                </span>
            ))}
        </div>

        {/* ── BODY: Two Columns ── */}
        <div className="grid grid-cols-[2fr_1fr]">

            {/* LEFT COLUMN */}
            <div className="px-10 py-7 border-r border-gray-100 space-y-7">

                {/* Experience */}
                <section>
                    <SectionTitle icon={Briefcase} title="Work Experience" />
                    {cvData.experience.map((exp, i) => (
                        <div key={i} className={i > 0 ? "mt-5" : "mt-3"}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{exp.role}</h4>
                                    <p className="text-emerald-600 text-xs font-medium">{exp.company}</p>
                                </div>
                                <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="mt-2 space-y-1">
                                {exp.points.map((pt, j) => (
                                    <li key={j} className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">▸</span>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section>
                    <SectionTitle icon={Code2} title="Featured Projects" />
                    <div className="mt-3 space-y-4">
                        {cvData.projects.map((p, i) => (
                            <div key={i} className="border-l-2 border-emerald-400 pl-3">
                                <div className="flex items-center justify-between gap-2">
                                    <h4 className="font-bold text-gray-800 text-sm">{p.name}</h4>
                                    <span className="text-[10px] text-gray-400 bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded whitespace-nowrap">
                                        {p.url}
                                    </span>
                                </div>
                                <p className="text-[10px] text-emerald-600 font-medium mb-0.5">{p.tech}</p>
                                <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section>
                    <SectionTitle icon={GraduationCap} title="Education" />
                    {cvData.education.map((ed, i) => (
                        <div key={i} className="mt-3 flex items-start justify-between">
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">{ed.degree}</h4>
                                <p className="text-emerald-600 text-xs font-medium">{ed.institution}</p>
                            </div>
                            <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                                {ed.period}
                            </span>
                        </div>
                    ))}
                </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="px-6 py-7 space-y-6 bg-gray-50/50">

                {/* Skills */}
                <section>
                    <SectionTitle icon={Cpu} title="Technical Skills" small />
                    <div className="mt-3 space-y-4">
                        {Object.entries(cvData.skills).map(([cat, items]) => (
                            <div key={cat}>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">{cat}</p>
                                <div className="flex flex-wrap gap-1">
                                    {items.map((skill) => (
                                        <span key={skill} className="px-2 py-0.5 text-[10px] font-medium bg-white border border-gray-200 rounded text-gray-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Languages */}
                <section>
                    <SectionTitle icon={Globe} title="Languages" small />
                    <ul className="mt-3 space-y-1.5">
                        {cvData.languages.map((lang) => (
                            <li key={lang} className="text-xs text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                {lang}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Achievements */}
                <section>
                    <SectionTitle icon={Briefcase} title="Achievements" small />
                    <ul className="mt-3 space-y-2">
                        {[
                            "15+ Projects Delivered",
                            "2+ Years Experience",
                            "98% Client Satisfaction",
                            "9+ Technologies Mastered",
                            "Open Source Contributor",
                        ].map((item) => (
                            <li key={item} className="text-xs text-gray-600 flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="bg-[#0f172a] px-10 py-3 text-center">
            <p className="text-gray-400 text-[10px]">
                References available upon request &nbsp;·&nbsp; 
                <a 
                    href={`mailto:${cvData.email}`} 
                    onClick={(e) => openEmail(cvData.email, e)}
                    className="hover:text-emerald-400 transition-colors"
                >
                    {cvData.email}
                </a> 
                &nbsp;·&nbsp; {cvData.website}
            </p>
        </div>
    </div>
);

// ─── Main CV Modal ────────────────────────────────────────────────────────
const CV = ({ onClose }) => {
    const cvRef = useRef(null);

    const handleDownload = () => {
        const cvEl = document.getElementById('cv-print-area');
        if (!cvEl) return;

        // Collect current styles
        const styleLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .map(link => `<link rel="stylesheet" href="${link.href}">`)
            .join('');
        const inlineStyles = Array.from(document.querySelectorAll('style'))
            .map(s => `<style>${s.innerHTML}</style>`)
            .join('');

        const printWindow = window.open('', '_blank', 'width=1000,height=800');
        if (!printWindow) {
            alert("Please allow popups to download the CV.");
            return;
        }

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8"/>
                <title>${cvData.name} — CV</title>
                ${styleLinks}
                ${inlineStyles}
                <style>
                    /* Force Print Settings */
                    @page { 
                        size: A4; 
                        margin: 0; 
                    }
                    body { 
                        margin: 0; 
                        padding: 0; 
                        background: white !important;
                        -webkit-print-color-adjust: exact !important; 
                        print-color-adjust: exact !important;
                    }
                    #cv-print-area { 
                        width: 210mm !important; 
                        margin: 0 auto !important;
                        box-shadow: none !important;
                        transform: none !important;
                        display: block !important;
                    }
                    .no-print { display: none !important; }
                    
                    /* Typography & Colors */
                    * { 
                        -webkit-print-color-adjust: exact !important; 
                        print-color-adjust: exact !important; 
                    }
                </style>
            </head>
            <body>
                <div id="cv-outer-wrapper">
                    ${cvEl.innerHTML}
                </div>
            </body>
            <script>
                // Map the original ID to the wrapper if needed, but innerHTML is safer for clones
                document.body.firstElementChild.id = "cv-print-area";
                document.body.firstElementChild.className = "${cvEl.className}";
            </script>
            </html>
        `);
        printWindow.document.close();

        // Wait for styles and fonts to be ready
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
            // Close after a delay to allow the print dialog to finish
            printWindow.onafterprint = () => printWindow.close();
            // Fallback for browsers that don't support onafterprint
            setTimeout(() => {
                if (!printWindow.closed) printWindow.close();
            }, 1000);
        }, 800);
    };


    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex items-start justify-center bg-black/85 backdrop-blur-md"
            style={{ overflowY: 'auto', paddingTop: '10px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                style={{ margin: 'auto' }}
            >
                {/* CV card — scale to fit screen width */}
                <div
                    style={{
                        transformOrigin: 'top center',
                        transform: `scale(${Math.min(1, (window.innerWidth - 32) / 794)})`,
                        marginBottom: `calc((${Math.min(1, (window.innerWidth - 32) / 794)} - 1) * 100%)`,
                    }}
                    className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative"
                >
                    <CVPage cvRef={cvRef} onClose={onClose} onDownload={handleDownload} />
                </div>

                {/* Mobile-only prominent close button */}
                <div className="md:hidden flex justify-center mt-8 pb-12">
                    <button
                        onClick={onClose}
                        className="bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95"
                    >
                        <X size={18} />
                        Close CV
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CV;
