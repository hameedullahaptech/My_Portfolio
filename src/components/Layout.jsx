import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onOpenHire }) => {
    return (
        <div className="min-h-screen relative overflow-x-hidden text-white">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-900/20 blur-[100px]" />
            </div>

            <Navbar onOpenHire={onOpenHire} />

            <main className="relative z-10">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
