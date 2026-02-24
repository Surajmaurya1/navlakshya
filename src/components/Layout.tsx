import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SiInstagram, SiFacebook, SiLinkedin } from 'react-icons/si';
import { ROUTE_PATHS } from '@/lib/index';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: ROUTE_PATHS.HOME },
    { name: 'Programs', path: ROUTE_PATHS.PROGRAMS },
    { name: 'About Us', path: ROUTE_PATHS.ABOUT },
    { name: 'Contact', path: ROUTE_PATHS.CONTACT },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'h-16 border-b border-border bg-background/80 backdrop-blur-md shadow-sm' 
            : 'h-20 bg-transparent'
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-8">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground">
                NAVLAKSHYA
              </span>
              <span className="hidden text-[10px] font-medium text-muted-foreground sm:block">
                Empowering India's Future
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-[22px] left-0 h-0.5 w-full bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to={ROUTE_PATHS.PROGRAMS}
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-primary/20 active:scale-95"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-4 p-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-border py-4 text-xl font-bold ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`
                  }
                >
                  {link.name}
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </NavLink>
              ))}
              <Link
                to={ROUTE_PATHS.PROGRAMS}
                className="mt-8 flex h-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-lg"
              >
                Explore Scholarship Programs
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-2xl font-black tracking-tighter">NAVLAKSHYA</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                NavLakshya is a structured career development ecosystem designed to guide students from academic excellence to professional success.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Programs Column */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Our Programs</h3>
              <ul className="space-y-4">
                <li>
                  <Link to={ROUTE_PATHS.PROGRAMS} className="text-sm text-muted-foreground hover:text-primary transition-colors">Scholarship Program (AIBMSP)</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PROGRAMS} className="text-sm text-muted-foreground hover:text-primary transition-colors">Career Counseling</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PROGRAMS} className="text-sm text-muted-foreground hover:text-primary transition-colors">Skill Development</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PROGRAMS} className="text-sm text-muted-foreground hover:text-primary transition-colors">Placement Assistance</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to={ROUTE_PATHS.HOME} className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.ABOUT} className="text-sm text-muted-foreground hover:text-primary transition-colors">About NavLakshya</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.CONTACT} className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.ABOUT} className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">info@navlakshya.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Streamcore Web Pvt Ltd Office,<br />
                    India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-muted-foreground">
                © 2026 NavLakshya. Education & Career Empowerment Initiative of Streamcore Web Pvt Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Made for students by</span>
                <a href="#" className="font-bold text-foreground hover:text-primary transition-colors">Streamcore Web</a>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
