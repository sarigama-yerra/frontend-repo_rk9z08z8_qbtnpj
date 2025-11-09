import React from 'react';
import { MessageSquare, Headphones } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-10 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold">Butuh bantuan memilih paket?</h3>
          <p className="mt-2 text-white/90">Tim kami siap 24/7 untuk bantu konsultasi dan migrasi gratis.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-neutral-900 hover:bg-white/90">
              <MessageSquare size={18} /> Live Chat
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10">
              <Headphones size={18} /> Buka Tiket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
