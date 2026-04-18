"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, FileCode2, CheckCircle2 } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI Code Review",
      description: "Stop waiting for peers. Our AI catches bugs, security flaws, and anti-patterns before they hit the main branch.",
      icon: <BrainCircuit className="h-6 w-6 text-indigo-400" />,
      gradient: "from-indigo-500/20 to-transparent",
      perks: ["Instant feedback", "Security analysis", "Style enforcement"],
    },
    {
      title: "Automated Standups",
      description: "Generates beautiful daily activity reports from your team’s commits, PRs, and tickets automatically.",
      icon: <FileCode2 className="h-6 w-6 text-violet-400" />,
      gradient: "from-violet-500/20 to-transparent",
      perks: ["Zero manual input", "Slack integration", "Meeting eliminations"],
    },
    {
      title: "Velocity Tracking",
      description: "Measure engineering velocity with beautiful analytics without turning into a micromanaging boss.",
      icon: <LineChart className="h-6 w-6 text-pink-400" />,
      gradient: "from-pink-500/20 to-transparent",
      perks: ["Burn down charts", "Bottleneck discovery", "Sprint predictions"],
    },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] z-0 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] z-0 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Engineering metrics that <br/> actually matter.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-400"
          >
            Everything you need to ship faster, unblock your team, and build an elite engineering culture without the boilerplate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-md overflow-hidden p-8 hover:border-white/10 transition-all duration-300 group shadow-lg`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl`} />
              
              <div className="h-12 w-12 rounded-lg bg-slate-800/50 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight relative z-10">{feature.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
                {feature.description}
              </p>

              <ul className="space-y-3 relative z-10">
                {feature.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 opacity-80" />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
