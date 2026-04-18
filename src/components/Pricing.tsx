"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "For small teams just getting started with velocity tracking.",
    price: "$49",
    highlight: false,
    features: ["Up to 5 developers", "Basic sprint reports", "7-day data retention", "Community support"],
  },
  {
    name: "Pro",
    description: "For scaling engineering orgs that need deep insights.",
    price: "$149",
    highlight: true,
    features: [
      "Up to 25 developers",
      "Advanced AI Code Review",
      "Automated standups via Slack",
      "90-day data retention",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex delivery needs.",
    price: "Custom",
    highlight: false,
    features: [
      "Unlimited developers",
      "Custom metric dashboards",
      "On-premise deployment options",
      "Unlimited data retention",
      "Dedicated success manager",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative border-t border-white/5 bg-slate-950">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-400"
          >
            No hidden fees. No surprise overages. Just the tools you need to ship faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 
                ${plan.highlight 
                  ? "bg-slate-900 border-2 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.2)] md:-translate-y-4" 
                  : "bg-slate-900/50 border border-white/10 hover:border-white/20"}
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-indigo-500/50">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 font-medium">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-slate-300">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlight ? "text-indigo-400" : "text-slate-500"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`block w-full py-3 px-4 rounded-lg text-center text-sm font-semibold transition-all
                  ${plan.highlight 
                    ? "bg-indigo-500 hover:bg-indigo-600 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]" 
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}
                `}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
