import { Activity, MessageSquare, Globe, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const links = {
    product: ["Features", "Integrations", "Pricing", "Changelog", "Docs"],
    company: ["About", "Blog", "Careers", "Contact", "Partners"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-indigo-500" />
              <span className="font-bold text-xl tracking-tight text-white">DevMetrics AI</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm">
              Helping engineering teams ship faster, unblock their pipelines, and automate the busywork of modern software development.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-slate-900 rounded-md border border-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <MessageSquare className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-md border border-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-md border border-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DevMetrics AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="flex h-3 w-3 relative max-w-fit mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-slate-500 font-mono">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
