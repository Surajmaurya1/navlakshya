import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Trophy, Briefcase, CheckCircle2, Star } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS, PROGRAMS_DATA, scrollToSection } from "@/lib/index";
import { PROGRAM_BENEFITS, TESTIMONIALS } from "@/data/index";
import { ProgramCard, BenefitCard, TestimonialCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_EDUCATION_1} 
            alt="NavLakshya Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Trophy className="w-4 h-4" />
              Education & Career Empowerment Initiative
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Empowering India’s Future Through <br className="hidden md:block" />
              <span className="text-primary">Scholarship, Skill & Career Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              NavLakshya is a national-level education and career empowerment platform offering Scholarship Programs, Career Counseling, Skill Development Training, and Placement Assistance for white-collar careers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="h-12 px-8 rounded-full shadow-lg shadow-primary/25"
                onClick={() => scrollToSection('programs')}
              >
                Apply for Scholarship
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 rounded-full border-2"
                onClick={() => scrollToSection('programs')}
              >
                Book Career Counseling
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="h-12 px-8 rounded-full"
                onClick={() => scrollToSection('programs')}
              >
                Explore Skill Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">🌟 About NavLakshya</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                NavLakshya is a structured career development ecosystem designed to guide students from academic excellence to professional success. We bridge the gap between education and employment by identifying talent and nurturing it for the corporate world.
              </p>
              <div className="grid gap-4">
                {[
                  "National Scholarship Exams",
                  "Scientific Career Counseling",
                  "Industry-Oriented Skill Development",
                  "Placement & Internship Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-primary text-primary-foreground">
                <p className="text-xl font-semibold italic">
                  "Our mission is simple — Identify Talent. Build Skills. Create Careers."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="grid grid-cols-2 gap-6"
            >
              {PROGRAM_BENEFITS.map((benefit, idx) => (
                <BenefitCard key={idx} benefit={benefit} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">🎯 Our Programs</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive career transformation pathways designed to take you from classroom brilliance to corporate success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS_DATA.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to={ROUTE_PATHS.PROGRAMS}>
              <Button variant="link" size="lg" className="text-primary font-bold">
                View Full Program Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images/Stats Strip */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm opacity-70">Scholars Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm opacity-70">Corporate Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm opacity-70">Counseling Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm opacity-70">Skill Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <div className="flex items-center justify-center gap-1 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA/Contact Anchor */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 md:p-16 text-primary-foreground text-center">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="relative z-10 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Launch Your Career?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-10">
                Join NavLakshya today and take the first step towards a brighter, more secure professional future. Your journey from potential to professional starts here.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={ROUTE_PATHS.CONTACT}>
                  <Button size="lg" variant="secondary" className="h-12 px-10 rounded-full font-bold">
                    Get In Touch Now
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-10 rounded-full border-white/20 hover:bg-white/10 text-white"
                  onClick={() => scrollToSection('hero')}
                >
                  Back to Top
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
