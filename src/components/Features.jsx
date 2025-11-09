import React from 'react';
import { Cpu, HardDrive, Globe, BarChart3, ShieldCheck, Wrench } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Cpu,
      title: 'CPU Generasi Terbaru',
      desc: 'Core tinggi untuk performa maksimal pada trafik padat.',
    },
    {
      icon: HardDrive,
      title: 'Storage NVMe RAID',
      desc: 'Kecepatan baca/tulis kilat dengan proteksi data.',
    },
    {
      icon: Globe,
      title: 'Global Anycast DNS',
      desc: 'Resolusi domain cepat dari seluruh dunia.',
    },
    {
      icon: BarChart3,
      title: 'Monitoring Real-time',
      desc: 'Grafik usage CPU, RAM, I/O & bandwidth transparan.',
    },
    {
      icon: ShieldCheck,
      title: 'Keamanan Proaktif',
      desc: 'WAF, Malware scanner, patching otomatis, dan isolasi akun.',
    },
    {
      icon: Wrench,
      title: 'Dev-Ready Stack',
      desc: 'Node, Python, PHP, CI/CD, dan staging environment.',
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-transparent via-neutral-50/60 to-transparent dark:via-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Fitur Premium</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Semua yang Anda butuhkan untuk menjalankan website modern, cepat, dan aman.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 hover:shadow-xl transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
