"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Activity, X, Github, Mail } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  mode: "signin" | "signup";
  onClose: () => void;
  setMode: (mode: "signin" | "signup") => void;
}

export function AuthModal({ isOpen, mode, onClose, setMode }: AuthModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.15)] overflow-hidden pointer-events-auto relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-8 justify-center">
                  <Activity className="h-8 w-8 text-indigo-500" />
                  <span className="font-bold text-2xl tracking-tight text-white">DevMetrics AI</span>
                </div>

                <h2 className="text-2xl font-bold text-white text-center mb-2">
                  {mode === "signin" ? "Welcome back" : "Create your account"}
                </h2>
                <p className="text-slate-400 text-center mb-8 text-sm">
                  {mode === "signin" 
                    ? "Enter your credentials to access your dashboard." 
                    : "Start your 14-day free trial. No credit card required."}
                </p>

                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-950 font-semibold py-2.5 rounded-lg hover:bg-slate-200 transition-colors">
                    <Github className="h-5 w-5" />
                    Continue with GitHub
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#24292F] text-white font-semibold py-2.5 rounded-lg hover:bg-[#24292F]/80 border border-white/10 transition-colors">
                    <Mail className="h-5 w-5" />
                    Continue with Email
                  </button>
                </div>

                <div className="my-6 flex items-center gap-4">
                  <div className="h-px bg-white/10 flex-1" />
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Or</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Email address</label>
                    <input 
                      type="email" 
                      placeholder="you@company.com" 
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-sans"
                    />
                  </div>
                  
                  <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-lg mt-2 transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                    {mode === "signin" ? "Sign In" : "Get Started"}
                  </button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                  {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    {mode === "signin" ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
