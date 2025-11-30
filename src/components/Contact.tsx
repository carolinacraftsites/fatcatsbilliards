import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-hero-bg text-hero-fg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-display mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-hero-fg/80 mb-6">
              Come see why we're Asheville's favorite pool hall
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-glow mx-auto rounded-full"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Location */}
            <div className="bg-hero-fg/5 backdrop-blur-sm border border-hero-fg/10 rounded-xl p-8 hover:bg-hero-fg/10 transition-all duration-300 hover:border-primary/30">
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
            <div className="bg-hero-fg/5 backdrop-blur-sm border border-hero-fg/10 rounded-xl p-8 hover:bg-hero-fg/10 transition-all duration-300 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">Phone</h3>
                  <a href="tel:8286810556" className="text-hero-fg/80 text-lg mb-1 hover:text-primary transition-colors block">
                    (828) 681-0556
                  </a>
                  <p className="text-hero-fg/60 text-sm">
                    Call for reservations or questions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 backdrop-blur-md border border-primary/40 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full"></div>
                  <Clock className="w-7 h-7 text-primary relative z-10" />
                </div>
                <h3 className="text-hero-fg font-display text-3xl tracking-wide">HOURS</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Monday</span>
                  <span className="text-hero-fg/90">11:30 AM - 2:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Tuesday</span>
                  <span className="text-hero-fg/90">11:30 AM - 2:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Wednesday</span>
                  <span className="text-hero-fg/90">11:30 AM - 2:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Thursday</span>
                  <span className="text-hero-fg/90">11:30 AM - 2:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Friday</span>
                  <span className="text-hero-fg/90">11:30 AM - 2:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Saturday</span>
                  <span className="text-hero-fg/90">11:30 AM - 2:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hero-fg font-semibold text-lg">Sunday</span>
                  <span className="text-hero-fg/90">12:00 PM - 2:00 AM</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-hero-fg/20 text-center">
                <p className="text-hero-fg/80 text-sm">
                  <span className="font-semibold text-primary">Holiday Hours:</span> Please call ahead at{" "}
                  <a href="tel:8286810556" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                    (828) 681-0556
                  </a>
                </p>
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
