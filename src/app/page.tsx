import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
