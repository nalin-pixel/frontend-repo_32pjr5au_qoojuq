import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SakuraBackground from './components/SakuraBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 text-gray-900">
      {/* Floating sakura background */}
      <SakuraBackground count={40} />

      {/* Content stack */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-rose-600 text-xl">Sakura Backend</div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#experience" className="text-gray-700 hover:text-rose-600">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-rose-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
