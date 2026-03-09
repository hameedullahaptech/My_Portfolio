import { socialLinks, contactData } from '../constants';
import { openEmail } from '../utils/openEmail';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-1">
                           Hameed ullah
                        </h2>
                        <div className="mb-2">
                            <a 
                                href={`mailto:${contactData.email}`} 
                                onClick={(e) => openEmail(contactData.email, e)}
                                className="text-xs text-gray-400 hover:text-emerald-400 transition-colors"
                            >
                                {contactData.email}
                            </a>
                        </div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target={social.name === 'Email' ? undefined : '_blank'}
                                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                    onClick={social.name === 'Email' ? (e) => openEmail('hameedullahaptech@gmail.com', e) : undefined}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={social.name}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
