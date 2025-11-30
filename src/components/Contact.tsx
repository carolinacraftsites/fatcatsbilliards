import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-hero-bg text-hero-fg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-hero-fg/80">
              Come see why we're Asheville's favorite pool hall
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Location */}
            <div className="bg-hero-fg/5 backdrop-blur-sm border border-hero-fg/10 rounded-xl p-8 hover:bg-hero-fg/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">Location</h3>
                  <p className="text-hero-fg/80 text-lg">
                    2345 Hendersonville Rd<br />
                    Asheville, NC
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary/80 px-0 mt-2"
                    onClick={() => window.open('https://maps.google.com/?q=2345+Hendersonville+Rd+Asheville+NC', '_blank')}
                  >
                    Get Directions →
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-hero-fg/5 backdrop-blur-sm border border-hero-fg/10 rounded-xl p-8 hover:bg-hero-fg/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">Phone</h3>
                  <p className="text-hero-fg/80 text-lg mb-1">
                    (828) 681-0556
                  </p>
                  <p className="text-hero-fg/60 text-sm">
                    Call for reservations or questions
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-hero-fg/5 backdrop-blur-sm border border-hero-fg/10 rounded-xl p-8 hover:bg-hero-fg/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">Email</h3>
                  <p className="text-hero-fg/80 text-lg">
                    dustiannag@gmail.com
                  </p>
                  <p className="text-hero-fg/60 text-sm mt-1">
                    We'll get back to you soon!
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-hero-fg/5 backdrop-blur-sm border border-hero-fg/10 rounded-xl p-8 hover:bg-hero-fg/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">Hours</h3>
                  <p className="text-hero-fg/80 text-lg">
                    Open Late
                  </p>
                  <p className="text-hero-fg/60 text-sm mt-1">
                    Nights • Weekends • Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="text-center bg-gradient-to-r from-primary/20 to-transparent rounded-xl p-8 border border-primary/30">
            <p className="text-lg text-hero-fg/90">
              <span className="font-bold text-primary">Owned & Operated by Michael and Dustianna Smith</span>
              <br />
              <span className="text-hero-fg/70">Proudly serving the community since October 2007</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
