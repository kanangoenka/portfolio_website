import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LenisProvider } from './lib/LenisContext';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Cover from './components/magazine/Cover';
import MagazineNav from './components/magazine/MagazineNav';
import HeroChapter from './components/chapters/HeroChapter';
import PersonChapter from './components/chapters/PersonChapter';
import MenuChapter from './components/chapters/MenuChapter';
import ExperienceChapter from './components/chapters/ExperienceChapter';
import DiaryChapter from './components/chapters/DiaryChapter';
import FinalChapter from './components/chapters/FinalChapter';
import './App.css';

function App() {
  const [entered, setEntered] = useState(false);

  // Lock scroll behind the cover until the visitor enters the café.
  useEffect(() => {
    document.body.style.overflow = entered ? '' : 'hidden';
  }, [entered]);

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[var(--bg)] text-[var(--dark)] selection:bg-[var(--accent)] selection:text-[var(--cream)]">
        <CustomCursor />

        <AnimatePresence>
          {!entered && <Cover key="cover" onEnter={() => setEntered(true)} />}
        </AnimatePresence>

        {entered && (
          <>
            <ScrollProgress />
            <MagazineNav />
            <main>
              <HeroChapter />
              <PersonChapter />
              <MenuChapter />
              <ExperienceChapter />
              <DiaryChapter />
              <FinalChapter />
            </main>
          </>
        )}
      </div>
    </LenisProvider>
  );
}

export default App;
