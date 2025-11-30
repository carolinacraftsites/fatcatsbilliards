import { Clock, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">
              Table Rates
            </h2>
            <p className="text-xl text-muted-foreground">
              Fair pricing for premium pool tables
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Standard Rate */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-display">Early Bird</CardTitle>
                <CardDescription className="text-base">Until 5:00 PM</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-5xl font-display text-primary">$10</span>
                  <span className="text-xl text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Perfect for daytime play and practice sessions
                </p>
              </CardContent>
            </Card>

            {/* Evening Rate */}
            <Card className="border-2 border-primary shadow-glow scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-glow"></div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-display">Prime Time</CardTitle>
                <CardDescription className="text-base">After 5:00 PM</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-5xl font-display text-primary">$15</span>
                  <span className="text-xl text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Evening hours when the action heats up
                </p>
              </CardContent>
            </Card>

            {/* Senior Rate */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-display">Senior Rate</CardTitle>
                <CardDescription className="text-base">Until 5:00 PM</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-5xl font-display text-primary">$5</span>
                  <span className="text-xl text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Special discount for our senior players
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display text-foreground mb-2">
                  Ready to Play?
                </h3>
                <p className="text-foreground/80">
                  No reservations needed - just walk in and grab a table!
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground mb-1">Call us for group bookings</p>
                <p className="text-2xl font-bold text-primary">(828) 681-0556</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
