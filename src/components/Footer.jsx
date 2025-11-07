import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-rose-200 shadow-sm backdrop-blur">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Let's connect</h4>
              <p className="text-sm text-gray-600">Open to consulting, system design reviews, and interesting platform challenges.</p>
            </div>
            <div className="flex items-center gap-3 text-rose-600">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-rose-50 transition">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-rose-50 transition">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-rose-50 transition">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} — Crafted with 🌸 and performance in mind.</p>
        </div>
      </div>
    </footer>
  );
}
