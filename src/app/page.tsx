'use client';

import dynamic from 'next/dynamic';
import Header from '../Components/Header';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

// Dynamically import Hero with SSR disabled
const Hero = dynamic(() => import('../Components/Hero'), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Foreground content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
