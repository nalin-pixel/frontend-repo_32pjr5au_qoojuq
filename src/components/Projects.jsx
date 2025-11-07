import React from 'react';
import { Server, Gauge, Shield, Globe2 } from 'lucide-react';

const projects = [
  {
    name: 'High-throughput Payment Gateway',
    stack: 'Go, gRPC, Kafka, Redis, Postgres',
    impact: 'Peaked at 15k RPS with p99 under 120ms',
  },
  {
    name: 'Risk Scoring Platform',
    stack: 'Java (Spring Boot), Kafka Streams, Elastic',
    impact: 'Realtime fraud signals with end-to-end tracing',
  },
  {
    name: 'Observability Toolkit',
    stack: 'OpenTelemetry, Prometheus, Grafana',
    impact: 'Unified tracing & dashboards for 20+ services',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <Server className="h-6 w-6 text-rose-500" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
        </div>
        <p className="mt-2 text-gray-600">Engineering work that blends performance, reliability, and pragmatic design.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.name} className="rounded-xl bg-white/70 p-6 ring-1 ring-rose-200 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-rose-600">
                <Gauge className="h-5 w-5" />
                <span className="font-medium">{p.name}</span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{p.stack}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-rose-500" />
                <span>{p.impact}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 p-6 ring-1 ring-rose-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-gray-900">Need a backend that scales with grace?</h3>
              <p className="text-gray-600">I specialize in Go and Java, from domain modelling to production hardening. Let's build something resilient.</p>
            </div>
            <a href="#contact" className="rounded-lg bg-rose-500 text-white px-5 py-3 font-semibold shadow hover:bg-rose-600 transition inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
