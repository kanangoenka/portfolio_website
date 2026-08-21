import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LenisProvider } from './lib/LenisContext';
import CustomCursor from './components/CustomCursor';
import Cover from './components/magazine/Cover';
import MagazineNav from './components/magazine/MagazineNav';
import HeroChapter from './components/chapters/HeroChapter';
import PersonChapter from './components/chapters/PersonChapter';
import WorkChapter from './components/chapters/WorkChapter';
import ExperienceChapter from './components/chapters/ExperienceChapter';
import ToolboxChapter from './components/chapters/ToolboxChapter';
import NotesChapter from './components/chapters/NotesChapter';
import FinalChapter from './components/chapters/FinalChapter';
import ProjectStory from './components/ProjectStory';
import './App.css';

function App() {
  const [entered, setEntered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock scroll behind the cover until the visitor enters the issue.
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
            <MagazineNav />
            <main>
              <HeroChapter />
              <PersonChapter />
              <WorkChapter onSelect={setSelectedProject} />
              <ExperienceChapter />
              <ToolboxChapter />
              <NotesChapter />
              <FinalChapter />
            </main>
          </>
        )}

        <AnimatePresence>
          {selectedProject && (
            <ProjectStory project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </LenisProvider>
  );
}

export default App;
