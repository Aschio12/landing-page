"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart3, Database, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { useAuth } from "./AuthContext";

export function Hero() {
  const { openModal } = useAuth();
  
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-slate-950">
      
      {/* ======================= T H E  Q U A N T U M  N E X U S ======================= */}
      {/* Base Layer: Deep Slate */}
      <div className="absolute inset-0 bg-slate-950 z-0" />

      {/* The Liquid Aurora: A sweeping, rotating conic gradient */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "conic-gradient(from 0deg at 50% 50%, rgba(30,27,75,0) 0%, rgba(99,102,241,0.5) 25%, rgba(139,92,246,0.3) 50%, rgba(30,27,75,0) 75%, rgba(79,70,229,0.4) 100%)",
            filter: "blur(90px)"
          }}
        />
      </div>

      {/* High-Resolution Engineering Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #818cf8 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Data Pulse Rings */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0 pointer-events-none opacity-40">
        <motion.div
           animate={{ scale: [0.8, 2], opacity: [0.5, 0] }}
           transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
           className="absolute w-[300px] h-[300px] border border-indigo-500 rounded-full"
        />
        <motion.div
           animate={{ scale: [0.8, 2.5], opacity: [0.3, 0] }}
           transition={{ repeat: Infinity, duration: 6, ease: "easeOut", delay: 1 }}
           className="absolute w-[400px] h-[400px] border border-violet-500 rounded-full"
        />
      </div>

      {/* Floating Developer Syntax (Subtle & Elegant) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15]">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute text-7xl font-mono text-indigo-300 top-[20%] left-[15%]"
        >
          {"{ }"}
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute text-6xl font-mono text-fuchsia-300 bottom-[20%] right-[10%]"
        >
          {"< >"}
        </motion.div>
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute text-5xl font-mono text-slate-400 top-[15%] right-[25%]"
        >
          {"/"}
        </motion.div>
      </div>

      {/* Vignette Fade Map to seamlessly blend borders */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_0%,rgba(2,6,23,0.9)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      
      {/* ====================================================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)] text-sm font-medium text-slate-300 backdrop-blur-xl"
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
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Ship Better Code,
            </span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.6)] bg-[length:200%_auto] animate-gradient">
              Faster with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 font-medium drop-shadow-sm leading-relaxed"
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
          className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/20 bg-slate-900/60 backdrop-blur-2xl shadow-3xl overflow-hidden shadow-indigo-500/30 perspective-1000"
          style={{ transform: "rotateX(2deg) scale(0.95)" }}
        >
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/50 backdrop-blur-md px-4 py-3">
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
          <div className="flex h-[450px] bg-slate-950/40 backdrop-blur-xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]">
            
            {/* Left Sidebar (Nav) */}
            <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-6 bg-slate-900/30">
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
