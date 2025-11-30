import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="activities">
        <Activities />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-hero-bg text-hero-fg/60 py-8 border-t border-hero-fg/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-3">
            <a
              href="https://www.facebook.com/FatCatsAsheville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Follow us on Facebook
            </a>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Fat Cat's Billiards. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            2345 Hendersonville Rd • (828) 681-0556
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
