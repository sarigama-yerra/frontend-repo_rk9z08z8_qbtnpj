import React from 'react';
import { Rocket, Server, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-white/20 dark:border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <div className="bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 p-2 rounded-md text-white shadow-md">
              <Server size={18} />
            </div>
            <span className="tracking-tight">TempoHost</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow hover:opacity-95"
            >
              <Rocket size={16} /> Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-white/30 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl">
            <div className="px-4 py-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow"
              >
                <Rocket size={16} /> Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
