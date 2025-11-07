import React from 'react';
import { Building2, BadgeCheck } from 'lucide-react';

const roles = [
  { company: 'Tokopedia', title: 'Senior Backend Engineer', period: 'Marketplace & Payments', achievements: ['Low-latency services in Go', 'Resilient messaging & retries', 'Autoscaling and SLO-driven alerts'] },
  { company: 'Generali', title: 'Backend Engineer', period: 'Insurance Platforms', achievements: ['Policy services in Java/Spring', 'Secure integrations & audit trails', 'Data pipelines & reporting'] },
  { company: 'Finetiks', title: 'Senior Engineer', period: 'Fintech Infrastructure', achievements: ['KYC/AML flows', 'Rate-limited external APIs', 'Observability & tracing'] },
  { company: 'Ayoconnect', title: 'Backend Engineer', period: 'Payments & Aggregation', achievements: ['Microservices in Go', 'Async event-driven patterns', 'High throughput gateways'] },
  { company: 'Advance AI', title: 'Backend Engineer', period: 'AI-driven Risk', achievements: ['Model-serving infra', 'Batch & realtime scoring', 'Partner onboarding APIs'] },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <Building2 className="h-6 w-6 text-rose-500" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Experience</h2>
        </div>
        <p className="mt-2 text-gray-600">A brief overview of places I've helped ship and scale platforms.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.company} className="rounded-xl bg-white/70 p-6 ring-1 ring-rose-200 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{r.company}</h3>
                  <p className="text-sm text-rose-600">{r.title}</p>
                  <p className="text-sm text-gray-500">{r.period}</p>
                </div>
                <BadgeCheck className="h-5 w-5 text-rose-500" />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                {r.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
