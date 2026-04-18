"use client";

import Link from "next/link";
import { Activity } from "lucide-react";
import { useAuth } from "./AuthContext";

export function Navbar() {
  const { openModal } = useAuth();

  return (
    <nav className="border-b border-white/10 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-indigo-500" />
            <span className="font-bold text-xl tracking-tight text-white">DevMetrics AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">How it Works</Link>
            <Link href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => openModal("signin")}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => openModal("signup")}
              className="text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
