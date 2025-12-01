import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWithoutBg from "@/assets/fatcats-logo-wobg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-bg via-hero-bg to-charcoal overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo positioned top center */}
          <div className="flex justify-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <img
              src={logoWithoutBg}
              alt="Fat Cat's Billiards Logo"
              className="w-56 md:w-72 lg:w-80 drop-shadow-2xl"
            />
          </div>

          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-hero-fg mb-8 leading-none animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 tracking-tight">
              FAMILY FRIENDLY
              <br />
              <span className="text-primary">POOL HALL</span>
            </h1>

            {/* Feature highlights in a more visual layout */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-xl px-6 py-3 hover:scale-105 transition-transform">
                <p className="text-hero-fg font-bold text-lg md:text-xl">Diamond Pool Tables</p>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-xl px-6 py-3 hover:scale-105 transition-transform">
                <p className="text-hero-fg font-bold text-lg md:text-xl">Darts & Cornhole</p>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-xl px-6 py-3 hover:scale-105 transition-transform">
                <p className="text-hero-fg font-bold text-lg md:text-xl">Amazing Food & Drinks</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-hero-fg/90 mb-12 max-w-3xl mx-auto font-body animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 leading-relaxed">
              Where everyone feels like family. Experience <span className="text-primary font-semibold">Asheville's premier billiards hall</span> with something for everyone!
            </p>

            {/* CTA Buttons - enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-10 py-7 shadow-glow transition-all hover:scale-110 hover:shadow-2xl"
                asChild
              >
                <a href="tel:8286810556">
                  <Phone className="mr-3 h-6 w-6" />
                  (828) 681-0556
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:text-hero-fg hover:bg-primary/20 text-xl font-bold px-10 py-7 transition-all hover:scale-110 backdrop-blur-sm"
                asChild
              >
                <a href="#contact">
                  <MapPin className="mr-3 h-6 w-6" />
                  Visit Us
                </a>
              </Button>
            </div>

            {/* Hours Badge - enhanced */}
            <div className="inline-block bg-hero-bg/40 backdrop-blur-md border-2 border-primary/50 rounded-full px-8 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 hover:border-primary transition-all">
              <p className="text-hero-fg font-bold text-lg">
                ⏰ Open Late Nights • Weekends • Holidays
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
