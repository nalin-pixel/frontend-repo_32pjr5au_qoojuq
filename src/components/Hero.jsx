import React from 'react';
import { Code, Terminal } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* 3D Sakura scene (optional decorative) */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/0oW3ItK2cK0p0D8v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle overlay so text remains readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-rose-200 backdrop-blur">
          <Terminal className="h-4 w-4 text-rose-500" />
          <span className="text-sm text-rose-600">Senior Backend Engineer — Go • Java</span>
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Sakura-kissed Craftsmanship in Code
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          I build reliable, scalable backends across fintech, insuretech, and growth-stage marketplaces — with a focus on high throughput, observability, and developer ergonomics.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#experience" className="rounded-lg bg-rose-500 text-white px-5 py-3 font-semibold shadow hover:bg-rose-600 transition">View Experience</a>
          <a href="#projects" className="rounded-lg px-5 py-3 font-semibold text-rose-600 ring-1 ring-rose-200 bg-white/70 hover:bg-white transition">Selected Projects</a>
        </div>
        {backendUrl ? (
          <p className="mt-3 text-xs text-gray-500">API ready at {backendUrl}</p>
        ) : null}
      </div>
    </section>
  );
}
