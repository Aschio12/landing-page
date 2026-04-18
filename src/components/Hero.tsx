"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart3, Database, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { useAuth } from "./AuthContext";

export function Hero() {
  const { openModal } = useAuth();
  
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-slate-950">
      
      {/* ======================= THE CYBER-AI NEXUS ======================= */}
      <div className="absolute inset-0 bg-slate-950 z-0 overflow-hidden" />

      {/* Pulsating Hexagonal / Grid Tech Base */}
      <div className="absolute inset-0 z-0" style={{ perspective: "1200px" }}>
        <motion.div
           animate={{ rotateX: [60, 60], y: [0, 80] }}
           transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
           className="absolute w-[200%] h-[200%] -left-[50%] top-[-20%] opacity-30"
           style={{
             backgroundImage: "linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)",
             backgroundSize: "60px 60px"
           }}
        />
      </div>

      {/* Floating AI Core Rings (Smooth Cyan/Teal Tech Vibe) */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-40 mix-blend-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-full h-full rounded-full border-[2px] border-dashed border-cyan-500/30"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute w-[85%] h-[85%] rounded-full border-[1px] border-cyan-400/20"
        />
        <motion.div
          animate={{ rotate: 180, scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute w-[70%] h-[70%] rounded-full border-[3px] border-dotted border-teal-500/40"
        />
        {/* Core Glow */}
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.8, 1.1, 0.8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-[40%] h-[40%] bg-cyan-600/30 rounded-full blur-[80px]"
        />
      </div>

      {/* Floating Data Nodes (Fixed Hydration Error) */}
      {/* Real-time calculated positions to avoid Server/Client content mismatch */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[
          { top: 75, left: 15, delay: 0, duration: 8 },
          { top: 85, left: 25, delay: 2, duration: 6 },
          { top: 70, left: 35, delay: 1, duration: 9 },
          { top: 90, left: 45, delay: 3, duration: 7 },
          { top: 80, left: 55, delay: 0.5, duration: 8.5 },
          { top: 95, left: 65, delay: 4, duration: 6 },
          { top: 75, left: 75, delay: 1.5, duration: 7.5 },
          { top: 85, left: 85, delay: 2.5, duration: 9 },
          { top: 70, left: 95, delay: 0.2, duration: 6.5 },
          { top: 15, left: 10, delay: 3.5, duration: 8 },
          { top: 25, left: 80, delay: 1.2, duration: 7 },
          { top: 40, left: 90, delay: 4.2, duration: 9 },
          { top: 55, left: 5, delay: 2.8, duration: 6 },
          { top: 60, left: 95, delay: 0.8, duration: 8.5 },
          { top: 30, left: 40, delay: 5, duration: 7 }
        ].map((node, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: node.duration,
              delay: node.delay,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            style={{ top: `${node.top}%`, left: `${node.left}%` }}
          />
        ))}
      </div>

      {/* Vignette to blend into the rest of the site */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_80%,rgba(2,6,23,1)_100%)] z-0 pointer-events-none" />
      {/* ====================================================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)] text-sm font-medium text-slate-300 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent font-bold">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 drop-shadow-[0_0_25px_rgba(45,212,191,0.6)] bg-[length:200%_auto] animate-gradient">
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
              className="relative flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold tracking-wide transition-all hover:bg-cyan-400 border border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-shimmer" />
              <span className="relative flex items-center gap-2">Start 14-Day Free Trial <ArrowRight className="h-5 w-5" /></span>
            </button>
            <button
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-50 font-medium transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:-translate-y-1 backdrop-blur-md"
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
          className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/20 bg-slate-900/60 backdrop-blur-2xl shadow-3xl overflow-hidden shadow-cyan-500/30 perspective-1000"
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
              <div className="p-2 cursor-pointer text-cyan-400 bg-cyan-500/10 rounded-lg"><Terminal className="h-5 w-5" /></div>
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
                  <div className="p-3 bg-cyan-500/10 rounded-full"><Sparkles className="h-5 w-5 text-cyan-400" /></div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">AI Code Suggestion</p>
                    <p className="text-xl font-bold text-cyan-400 font-mono">Ready to Merge</p>
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
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30 font-sans font-medium flex items-center gap-1">
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
