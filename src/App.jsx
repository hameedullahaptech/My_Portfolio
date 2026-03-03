import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import CV from './components/CV';
import HireModal from './components/HireModal';

function App() {
  const [showCV, setShowCV] = useState(false);
  const [showHire, setShowHire] = useState(false);

  return (
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

      <AnimatePresence>
        {showCV && <CV onClose={() => setShowCV(false)} />}
        {showHire && <HireModal isOpen={showHire} onClose={() => setShowHire(false)} />}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
