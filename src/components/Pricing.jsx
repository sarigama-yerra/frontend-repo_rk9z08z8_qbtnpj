import React from 'react';
import { Check, Rocket, Crown } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '25K',
    period: '/bulan',
    highlight: false,
    features: ['1 Website', '10 GB NVMe', 'Bandwidth 250 GB', 'Gratis SSL', 'Support 24/7'],
  },
  {
    name: 'Pro',
    price: '65K',
    period: '/bulan',
    highlight: true,
    features: ['5 Website', '30 GB NVMe', 'Bandwidth 1 TB', 'Backup Harian', 'Priority Support'],
  },
  {
    name: 'Elite',
    price: '145K',
    period: '/bulan',
    highlight: false,
    features: ['Unlimited Website', '100 GB NVMe', 'Bandwidth Unmetered', 'Isolasi Resource', 'SLA 99.99%'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Paket Harga</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Pilih paket sesuai kebutuhanmu. Semua paket sudah termasuk SSL gratis dan dukungan 24/7.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 bg-white dark:bg-neutral-900 ${
                t.highlight
                  ? 'border-violet-500/40 shadow-lg shadow-violet-500/10'
                  : 'border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white">
                  <Crown size={14} /> Best Value
                </div>
              )}

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">{t.price}</span>
                <span className="text-neutral-500">{t.period}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <Check className="text-emerald-500" size={18} /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                  t.highlight
                    ? 'text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600'
                    : 'border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                <Rocket size={16} /> Mulai Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
