import { Users, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">
              What Makes Us Special
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-glow mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 mb-12 border border-border">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              We're a family friendly business that provides a wide array of activities in the form of{" "}
              <span className="font-bold text-primary">17 Diamond Smart Tables</span>,{" "}
              <span className="font-bold text-primary">9 steel tip dartboards</span>,{" "}
              two regulation cornhole lanes, the latest version of Golden Tee, 19 HD TVs, 
              and a Touchtune Jukebox that lets you play DJ.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              We offer a full menu made in house with a variety to please everyone in your group; including{" "}
              <span className="font-bold text-primary">the best wings in town</span>. 
              Our daily drink specials and large drink selection will keep you coming back to try it all.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-semibold text-primary">
              We provide something for everyone, but it's our people that set us apart from the crowd. 
              When you walk in you can feel the sense of family.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 hover:shadow-glow transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-display text-foreground mb-2">Family Atmosphere</h3>
              <p className="text-foreground/80">
                A welcoming environment where guests, staff, and players all know each other
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 hover:shadow-glow transition-all duration-300">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-display text-foreground mb-2">Since 2007</h3>
              <p className="text-foreground/80">
                Over 17 years of creating memories and bringing the community together
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 hover:shadow-glow transition-all duration-300">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-display text-foreground mb-2">Best in Town</h3>
              <p className="text-foreground/80">
                Premium Diamond Smart Tables and the best wings you'll ever taste
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
