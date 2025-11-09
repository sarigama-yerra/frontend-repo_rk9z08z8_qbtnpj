import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You could log to an error reporting service here
    // console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-semibold">Terjadi kesalahan saat memuat halaman</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Coba muat ulang halaman. Jika masalah berlanjut, matikan pemblokir konten atau koneksi jaringan terbatas.</p>
            <button onClick={() => window.location.reload()} className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              Muat Ulang
            </button>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <pre className="mt-4 text-left text-xs whitespace-pre-wrap bg-neutral-100 dark:bg-neutral-900/60 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-auto max-h-60">
                {String(this.state.error)}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
