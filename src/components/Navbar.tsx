import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fatcats-logo-wobg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Activities", id: "activities" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hero-bg/95 backdrop-blur-md shadow-lg border-b border-hero-fg/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={logo}
              alt="Fat Cat's Billiards"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-hero-fg hover:text-primary transition-colors duration-200 font-semibold text-lg"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://www.facebook.com/FatCatsAsheville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hero-fg hover:text-primary transition-colors duration-200 font-semibold text-lg"
            >
              Facebook
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-semibold text-lg"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-hero-fg p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-charcoal border-t border-hero-fg/20 py-4 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-hero-fg hover:text-primary hover:bg-hero-fg/5 transition-colors duration-200 font-semibold text-lg"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://www.facebook.com/FatCatsAsheville"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-hero-fg hover:text-primary hover:bg-hero-fg/5 transition-colors duration-200 font-semibold text-lg"
            >
              Facebook
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-primary hover:text-primary/80 hover:bg-hero-fg/5 transition-colors duration-200 font-semibold text-lg"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
