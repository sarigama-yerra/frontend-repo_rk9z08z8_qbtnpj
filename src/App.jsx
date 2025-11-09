import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} TempoHost. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white">Pricing</a>
              <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
