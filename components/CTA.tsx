'use client'

import { useState, FormEvent } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ett fel uppstod');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Ett fel uppstod');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Kom igång med AI
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Boka ett kostnadsfritt samtal för att diskutera er organisations AI-potential
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900/50 rounded-xl p-8 md:p-12 border border-neutral-800 max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Namn"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="E-post"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Företag (valfritt)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all"
            />
            <textarea
              name="message"
              placeholder="Beskriv er AI-utmaning eller projektidé"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all resize-none"
            ></textarea>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                Tack! Vi återkommer inom 48 timmar.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-neutral-50 text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Skickar...' : 'Skicka förfrågan'}
            </button>
          </form>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-neutral-50 mb-2">48h</div>
            <div className="text-sm text-neutral-400">Svarstid</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-50 mb-2">Kostnadsfritt</div>
            <div className="text-sm text-neutral-400">Första mötet</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-50 mb-2">Konfidentiellt</div>
            <div className="text-sm text-neutral-400">NDA vid behov</div>
          </div>
        </div>
      </div>
    </section>
  );
}
