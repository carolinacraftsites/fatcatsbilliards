import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/fatcats-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-bg to-charcoal overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <img 
              src={logo} 
              alt="Fat Cat's Billiards Logo" 
              className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-hero-fg mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Family Friendly Pool Hall
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-hero-fg/90 mb-8 font-body font-semibold max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            17 Diamond Smart Tables • Darts • Cornhole • Amazing Food & Drinks
          </p>

          <p className="text-lg md:text-xl text-hero-fg/80 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            Where everyone feels like family. Experience Asheville's premier billiards hall with something for everyone!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold px-8 py-6 shadow-glow transition-all hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              (828) 681-0556
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-hero-fg/30 text-hero-fg hover:bg-hero-fg/10 text-lg font-bold px-8 py-6 transition-all hover:scale-105"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Us
            </Button>
          </div>

          {/* Hours Badge */}
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
            <p className="text-hero-fg font-semibold">
              Open Late Nights • Weekends • Holidays
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
