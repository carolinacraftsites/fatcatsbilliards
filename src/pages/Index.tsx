import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Activities />
      <Pricing />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-hero-bg text-hero-fg/60 py-8 border-t border-hero-fg/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Fat Cat's Billiards. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            2345 Hendersonville Rd • (828) 681-0556 • dustiannag@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
