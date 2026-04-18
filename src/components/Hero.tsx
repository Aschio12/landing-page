"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
            V2.0 Now Available
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight"
          >
            Ship Better Code, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              Faster with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Automate your sprint reports and track engineering velocity without micromanaging your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#"
              className="flex items-center gap-2 px-8 py-4 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:-translate-y-0.5"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-8 py-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:-translate-y-0.5"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden shadow-indigo-500/10 perspective-1000"
          style={{ transform: "rotateX(2deg) scale(0.95)" }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/80 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1 rounded-md border border-white/5">
              <Terminal className="h-3 w-3" />
              devmetrics.ai/dashboard
            </div>
          </div>
          <div className="p-8 grid grid-cols-3 gap-6 h-[400px]">
            {/* Fake UI elements */}
            <div className="col-span-2 space-y-4">
              <div className="h-32 rounded-lg bg-slate-800/50 border border-white/5" />
              <div className="h-48 rounded-lg bg-slate-800/50 border border-white/5" />
            </div>
            <div className="space-y-4">
              <div className="h-24 rounded-lg bg-indigo-500/10 border border-indigo-500/20" />
              <div className="h-24 rounded-lg bg-slate-800/50 border border-white/5" />
              <div className="h-24 rounded-lg bg-slate-800/50 border border-white/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
