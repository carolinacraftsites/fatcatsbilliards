import { Circle, Target, Gamepad2, Utensils, Trophy, Music } from "lucide-react";

const activities = [
  {
    icon: Circle,
    title: "17 Diamond Smart Tables",
    description: "The best pool tables in town - professional grade equipment for serious players and casual fun",
    highlight: true,
  },
  {
    icon: Target,
    title: "Dart Leagues",
    description: "9 steel tip dartboards with singles, doubles, and travel team leagues",
    highlight: false,
  },
  {
    icon: Gamepad2,
    title: "Games & Entertainment",
    description: "Regulation cornhole lanes, Golden Tee, and 19 HD TVs for all the big games",
    highlight: false,
  },
  {
    icon: Utensils,
    title: "Full Menu & Bar",
    description: "Made in-house menu with the best wings in town, plus daily drink specials",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "Pool & Dart Leagues",
    description: "APA and BCA pool leagues - compete and connect with fellow players",
    highlight: false,
  },
  {
    icon: Music,
    title: "Great Atmosphere",
    description: "Touchtune Jukebox, UFC fight nights, and a vibe that keeps you coming back",
    highlight: false,
  },
];

const Activities = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">
              Something For Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From competitive leagues to casual hangouts, we've got everything you need for an amazing time
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-card ${
                  activity.highlight 
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-transparent' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`inline-flex p-4 rounded-lg mb-4 ${
                  activity.highlight ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <activity.icon className={`w-8 h-8 ${
                    activity.highlight ? 'text-primary' : 'text-foreground'
                  }`} />
                </div>
                <h3 className="text-2xl font-display text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-12 bg-charcoal rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-display text-hero-fg mb-4">
              More Great Services
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-hero-fg/90">
              <span className="bg-hero-fg/10 px-4 py-2 rounded-full border border-hero-fg/20">
                Pool Cues & Equipment for Sale
              </span>
              <span className="bg-hero-fg/10 px-4 py-2 rounded-full border border-hero-fg/20">
                Lessons Available
              </span>
              <span className="bg-hero-fg/10 px-4 py-2 rounded-full border border-hero-fg/20">
                UFC Fight Nights
              </span>
              <span className="bg-hero-fg/10 px-4 py-2 rounded-full border border-hero-fg/20">
                Full Table Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
