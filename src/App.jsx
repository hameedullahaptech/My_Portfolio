import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Loading from './components/Loading';

// Lazy load components for performance
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const CV = lazy(() => import('./components/CV'));
const HireModal = lazy(() => import('./components/HireModal'));

function App() {
  const [showCV, setShowCV] = useState(false);
  const [showHire, setShowHire] = useState(false);

  return (
    <Suspense fallback={<Loading />}>
      <Layout onOpenHire={() => setShowHire(true)}>
        <Hero
          onOpenCV={() => setShowCV(true)}
          onOpenHire={() => setShowHire(true)}
        />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </Layout>

      <AnimatePresence>
        {showCV && (
          <Suspense fallback={<Loading />}>
            <CV onClose={() => setShowCV(false)} />
          </Suspense>
        )}
        {showHire && (
          <Suspense fallback={null}>
            <HireModal isOpen={showHire} onClose={() => setShowHire(false)} />
          </Suspense>
        )}
      </AnimatePresence>
    </Suspense>
  );
}

export default App;

