import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle2, ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  const primaryScene = 'https://prod.spline.design/0n9o6kq0YgUPj3wK/scene.splinecode';
  const backupScene = 'https://prod.spline.design/6YcpMdMt7fQpS2fy/scene.splinecode';

  const [sceneUrl, setSceneUrl] = React.useState(primaryScene);
  const [loaded, setLoaded] = React.useState(false);
  const [fallback, setFallback] = React.useState(false);

  React.useEffect(() => {
    const toBackup = setTimeout(() => {
      if (!loaded) setSceneUrl(backupScene);
    }, 4500);

    const toFallback = setTimeout(() => {
      if (!loaded) setFallback(true);
    }, 9000);

    return () => {
      clearTimeout(toBackup);
      clearTimeout(toFallback);
    };
  }, [loaded]);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-[600px] w-[600px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-white/10 border border-white/20 backdrop-blur">
            <Zap size={14} className="text-yellow-500" />
            Superfast NVMe Hosting
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Hosting kencang untuk website modern.
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            Didesain untuk performa, keamanan, dan kemudahan. Mulai dari blog hingga aplikasi skala besar — kami siap melayani.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow hover:opacity-95"
            >
              Pilih Paket <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              Lihat Fitur
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
            {[
              'Gratis SSL & Backup Harian',
              'Support 24/7/365',
              'Uptime SLA 99.9%+',
              'Panel canggih & mudah',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          {!fallback ? (
            <Spline
              scene={sceneUrl}
              style={{ width: '100%', height: '100%' }}
              onLoad={() => setLoaded(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                  Tampilan 3D sedang tidak tersedia. Menampilkan visual statis sebagai pengganti.
                </p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-neutral-900/40" />
        </div>
      </div>

      <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto gap-4 px-4">
        {[
          { icon: Shield, title: 'Keamanan Berlapis', desc: 'DDoS protection, WAF, dan isolasi akun.' },
          { icon: Zap, title: 'Performa NVMe', desc: 'I/O super cepat untuk aplikasi berat.' },
          { icon: CheckCircle2, title: 'Migrasi Gratis', desc: 'Tim kami bantu pindahkan tanpa downtime.' },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-neutral-200/50 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-5">
            <Icon className="text-indigo-600" />
            <h3 className="mt-2 font-semibold text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
