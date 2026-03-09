import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Layout,
  Smartphone,
  Database,
  Code,
  PenTool,
  Server,
  Settings,
  Briefcase,
  Award,
  Code2,
  Users
} from 'lucide-react';
import WhatsAppIcon from '../utils/WhatsAppIcon';

import heroImage from '../assets/hero-image.jpg';
import aboutImage from '../assets/about-image.jpg';
import project1 from '../assets/image3.png';
import project2 from '../assets/image.png';
import project3 from '../assets/image1.png';
import project4 from '../assets/image2.png';

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "GitHub",    href: "https://github.com/hameedullahaptech",                                          icon: Github,       target: "_blank" },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/hameed-ullah-3b4a13343",                            icon: Linkedin,     target: "_blank" },
  { name: "WhatsApp", href: "https://wa.me/923178172876?text=Hi%20Hameed,%20I%20want%20to%20work%20with%20you!", icon: WhatsAppIcon, target: "_blank" },
  { name: "Email",     href: "mailto:hameedullahaptech@gmail.com",                                            icon: Mail },
];

export const projects = [
  {
    title: "Hotel Management System",
    description: "The Hotel Management System is a web-based application designed to streamline and automate hotel operations. The system allows admins to manage rooms, reservations, customers, staff, and services, while providing users with an easy way to search rooms, make bookings, and view reservation details.\n\nThe project includes role-based access, real-time room availability, booking management, and secure data handling, ensuring efficient hotel administration and a smooth user experience. This system helps reduce manual work and improves overall operational efficiency in the hospitality industry.",
    image: project1,
    tags: ["React", "Tailwind", "Recharts", "Node.js"],
    liveUrl: "https://frontend-seven-roan-54.vercel.app/",
    githubUrl: "https://github.com/hameedullahaptech/Hotel_Management_Project.git"
  },
  {
    title: "Fitness Tracker",
    description: "A responsive Fitness Tracker Website designed to help users monitor their daily health activities. The system allows users to log meals, track calories, manage workout routines, and view progress in a simple and user-friendly interface. Built with a modern UI, secure authentication, and database integration, the website ensures smooth performance across all devices.\n\nKey Features:\n• User registration & login\n• Meal and calorie tracking\n• Workout & activity logging\n• Responsive design\n• Secure database-driven system",
    image: project2,
    tags: ["React.js", "Tailwind", ".MongoDB", "Next.js"],
    liveUrl: "https://fitness-hameed.vercel.app/",
    githubUrl: "https://github.com/hameedullahaptech/Fitness-Tracking.git"
  },
  {
    title: "E-Commerce Web Application",
    description: "An E-Commerce Web Application is a complete online shopping platform that allows users to browse products, add items to the cart, and securely place orders. Through the admin panel, products, categories, pricing, and customer orders are efficiently managed.\n\nThe system features a modern user interface, secure checkout process, and order tracking, providing users with a smooth, reliable, and scalable online shopping experience.",
    image: project3,
    tags: ["React.js", "Bootstrap", "SQL", "Asp.Net"],
    liveUrl: "http://ecommercehameed.runasp.net/",
    githubUrl: "https://github.com/hameedullahaptech/Ecommerce.git"
  },
  {
    title: "Online Post Office Management  System",
    description: "The Online Post Office Management System is a web-based application designed to digitize traditional post office operations. Through this system, admins can manage deliveries, employees, charges, and locations, while users can book parcels, track shipments, and view delivery charges.\n\nThe project features role-based dashboards, real-time tracking, and automated charge calculation, making it an efficient solution for solving real-world logistics and postal management challenges.",
    image: project4,
    tags: ["React.js", "Bootstrap", "SQL", "Asp.Net"],
    liveUrl: "http://hameedofficemanagement.runasp.net/",
    githubUrl: "https://github.com/hameedullahaptech/Online-Post-Office-Management-System.git"
  },

];

export const services = [
  {
    title: "Web Development",
    description: "Building fast, SEO-friendly, and scalable websites using modern technologies like React and Next.js.",
    icon: Globe
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that provide seamless user experiences.",
    icon: Layout
  },
  {
    title: "Mobile App Dev",
    description: "Developing cross-platform mobile applications using React Native for both iOS and Android.",
    icon: Smartphone
  },
  {
    title: "API Development",
    description: "Designing and developing robust RESTful APIs and GraphQL schemas for data communication.",
    icon: Database
  },
  {
    title: "Custom Solutions",
    description: "Tailored software solutions to meet specific business needs and automate processes.",
    icon: Code
  },
  {
    title: "Technical Writing",
    description: "Creating clear technical documentation, API guides, and tutorials for developers.",
    icon: PenTool
  }
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Angular"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", ".NET", "Python", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "SQL Server", "MySQL"]
  },
  {
    title: "Tools & DevOps",
    icon: Settings,
    skills: ["Git", "Docker", "AWS"]
  },
];

export const stats = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Projects Completed", value: "15+", icon: Award },
  { label: "Technologies", value: "9+", icon: Code2 },
  { label: "Client Satisfaction", value: "98%", icon: Users },
];

export const aboutHighlights = [
  "Expert in React.js & Modern JavaScript",
  "Responsive & Mobile-First Design",
];

export const heroData = {
  greeting: "HELLO, I'M A",
  rolePrefix: "Full Stack",
  roleSuffix: "Developer.",
  description: "I architect and build scalable, end-to-end web applications with a focus on seamless user experiences and robust server-side logic. Specialized in React.js and Node.js, I deliver secure, fast, and enterprise-grade digital solutions from frontend to deployment.",
  badgeText: "Available for freelance work",
  ctaPrimary: "Contact Me",
  ctaSecondary: "Download CV",
  yearsExperience: "2+",
  experienceText: "Years Experience",
  experienceSubText: "Building Digital Products",
  image: heroImage
};

export const aboutData = {
  heading: "Turning complex problems into simple, beautiful code.",
  description: "I am a results-driven Full Stack Developer with over 2 years of experience in building high-performance digital products. My expertise spans across the entire development lifecycle—from crafting pixel-perfect, responsive UIs with React.js and Tailwind CSS, to designing scalable backend architectures using Node.js and Express.js. \n\nWith a strong foundation in both SQL and NoSQL databases (MongoDB, MySQL, SQL Server) and hands-on experience in Cloud & DevOps (AWS, Docker, Git), I help businesses transform their ideas into scalable, secure, and performant web platforms. I focus on clean code, optimized performance, and delivering high-quality user interfaces.",
  image: aboutImage
};

export const contactData = {
  heading: "Let's Work Together",
  description: "Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
  email: "hameedullahaptech@gmail.com",
  phone: "03178172876",
  whatsappUrl: "https://wa.me/923178172876",
  location: "Karachi",
  formLabels: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    button: "Send Message"
  }
};
