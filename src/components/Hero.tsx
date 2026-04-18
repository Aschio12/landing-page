"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart3, Database, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { useAuth } from "./AuthContext";

export function Hero() {
  const { openModal } = useAuth();
  
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] z-0 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-bold">
              DevMetrics AI 2.0
            </span>
            <span className="mx-2 h-3 w-[1px] bg-white/20" />
            Now with Predictive Velocity
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight"
          >
            Ship Better Code, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-500 animate-pulse">
              Faster with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            The AI-powered engineering autonomous assistant. We analyze commits, predict sprint bottlenecks, and perform expert code reviews in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => openModal("signup")}
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:-translate-y-0.5"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
          </motion.div>
        </div>

        {/* Realistic Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden shadow-indigo-500/20 perspective-1000"
          style={{ transform: "rotateX(2deg) scale(0.95)" }}
        >
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900/80 px-4 py-1.5 rounded-md border border-white/5 shadow-inner">
              <Terminal className="h-3 w-3" />
              dashboard.devmetrics.ai/review/PR-4092
            </div>
            <div className="w-10"></div> {/* Spacer for center alignment */}
          </div>

          {/* Mockup Content (The "Wow" Factor UI) */}
          <div className="flex h-[450px] bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
            
            {/* Left Sidebar (Nav) */}
            <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-6 bg-slate-900/50">
              <div className="p-2 cursor-pointer text-indigo-400 bg-indigo-500/10 rounded-lg"><Terminal className="h-5 w-5" /></div>
              <div className="p-2 cursor-pointer text-slate-500 hover:text-slate-300"><BarChart3 className="h-5 w-5" /></div>
              <div className="p-2 cursor-pointer text-slate-500 hover:text-slate-300"><Database className="h-5 w-5" /></div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col p-6 overflow-hidden">
              
              {/* Header Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800/40 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-red-500/10 rounded-full"><ShieldAlert className="h-5 w-5 text-red-400" /></div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Vulnerabilities Detected</p>
                    <p className="text-xl font-bold text-white font-mono">0 Critical</p>
                  </div>
                </div>
                <div className="bg-slate-800/40 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-full"><Sparkles className="h-5 w-5 text-indigo-400" /></div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">AI Code Suggestion</p>
                    <p className="text-xl font-bold text-indigo-400 font-mono">Ready to Merge</p>
                  </div>
                </div>
                <div className="bg-slate-800/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hidden sm:flex">
                  <div className="p-3 bg-emerald-500/10 rounded-full"><CheckCircle2 className="h-5 w-5 text-emerald-400" /></div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Velocity Impact</p>
                    <p className="text-xl font-bold text-emerald-400 font-mono">+14% Sprint Score</p>
                  </div>
                </div>
              </div>

              {/* Code Diff Simulation */}
              <div className="flex-1 bg-slate-950 border border-white/5 rounded-xl font-mono text-sm overflow-hidden flex flex-col shadow-inner">
                <div className="bg-slate-900 border-b border-white/10 px-4 py-2 flex items-center justify-between">
                  <span className="text-slate-300 text-xs">src/auth/security.ts</span>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-sans font-medium flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Auto-Fixed by AI
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex opacity-50 bg-red-500/10 text-red-300 px-2 py-0.5 rounded">
                    <span className="w-8 text-right mr-4 select-none opacity-50 text-red-400">- 42</span>
                    <span>{"const token = generateToken(user.id); // Standard generation"}</span>
                  </div>
                  <div className="flex bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-8 text-right mr-4 select-none opacity-50 text-emerald-400">+ 42</span>
                    <span>{"const token = await generateSecureToken(user.id, { expiresIn: '15m' });"}</span>
                  </div>
                  <div className="flex text-slate-500 px-2 py-0.5">
                    <span className="w-8 text-right mr-4 select-none opacity-50">  43</span>
                    <span>{"return res.status(200).json({ accessToken: token });"}</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
