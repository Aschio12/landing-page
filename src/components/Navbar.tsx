"use client";

import Link from "next/link";
import { Activity } from "lucide-react";
import { useAuth } from "./AuthContext";
import { motion } from "framer-motion";

export function Navbar() {
  const { openModal } = useAuth();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-b border-white/10 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Activity className="h-6 w-6 text-[#646cff]" />
            <span className="font-bold text-xl tracking-tight text-white">DevMetrics AI</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            <motion.div whileHover={{ y: -2 }}><Link href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="#how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">How it Works</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link></motion.div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal("signin")}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(100,108,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal("signup")}
              className="text-sm font-medium bg-[#646cff] hover:bg-[#5252d6] text-white px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
