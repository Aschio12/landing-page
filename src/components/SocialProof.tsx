"use client";

import { motion } from "framer-motion";
import { Hexagon, Layers, Box, Terminal, Code2 } from "lucide-react";

const companies = [
  { name: "TechFlow", icon: Hexagon },
  { name: "DevSync", icon: Layers },
  { name: "CloudScale", icon: Box },
  { name: "Nova", icon: Terminal },
  { name: "Streamline", icon: Code2 },
];

export function SocialProof() {
  return (
    <section className="py-20 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest leading-relaxed">
          Trusted by high-performance engineering teams
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
            >
              <company.icon className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
