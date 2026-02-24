import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  BrainCircuit, 
  Rocket, 
  Briefcase, 
  CheckCircle2, 
  GraduationCap, 
  Target, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { PROGRAMS_DATA, ROUTE_PATHS } from "@/lib/index";
import { SKILL_DIVISIONS } from "@/data/index";
import { ProgramCard, SkillDivisionCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-8 h-8 text-primary" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-primary" />,
  Rocket: <Rocket className="w-8 h-8 text-primary" />,
  Briefcase: <Briefcase className="w-8 h-8 text-primary" />,
};

export default function Programs() {
  const aibmsp = PROGRAMS_DATA.find((p) => p.id === "aibmsp");
  const counseling = PROGRAMS_DATA.find((p) => p.id === "counseling");
  const skills = PROGRAMS_DATA.find((p) => p.id === "skills");
  const placement = PROGRAMS_DATA.find((p) => p.id === "placement");

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_EDUCATION_6} 
            alt="NavLakshya Programs" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Our Specialized <span className="text-primary">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From academic recognition to professional realization, we guide you at every step of your career journey.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 flex flex-col gap-32">
        {/* 1. AIBMSP Scholarship */}
        {aibmsp && (
          <section id="aibmsp" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Trophy className="w-4 h-4" />
                Scholarship Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{aibmsp.fullName}</h2>
              <p className="text-lg text-muted-foreground">{aibmsp.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2 text-primary">
                    <Target className="w-5 h-5" /> Objectives
                  </h4>
                  <ul className="space-y-2">
                    {aibmsp.objectives?.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2 text-primary">
                    <GraduationCap className="w-5 h-5" /> Eligibility
                  </h4>
                  <p className="text-sm text-muted-foreground">{aibmsp.eligibility}</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                <h4 className="font-bold mb-4">Exam Structure</h4>
                <div className="flex flex-wrap gap-3">
                  {aibmsp.structure?.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-background rounded-lg border border-border text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full">
                <Link to={ROUTE_PATHS.CONTACT}>Apply for AIBMSP</Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                <img src={IMAGES.HERO_EDUCATION_1} alt="AIBMSP Scholarship" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-8 bg-card border border-border rounded-2xl shadow-xl max-w-[280px]">
                <p className="text-sm font-semibold text-primary mb-2">Benefit Highlight</p>
                <p className="text-foreground font-medium">Merit Certificate & National Level Recognition for all qualified candidates.</p>
              </div>
            </motion.div>
          </section>
        )}

        {/* 2. Career Counseling */}
        {counseling && (
          <section id="counseling" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                <img src={IMAGES.CAREER_COUNSELING_2} alt="Career Counseling" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 p-6 bg-primary text-primary-foreground rounded-2xl shadow-xl">
                <BrainCircuit className="w-12 h-12" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold">
                <BrainCircuit className="w-4 h-4" />
                Career Advisory
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{counseling.title}</h2>
              <p className="text-lg text-muted-foreground">{counseling.description}</p>

              <div className="grid gap-4">
                {counseling.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to={ROUTE_PATHS.CONTACT}>Book Your Session</Link>
              </Button>
            </motion.div>
          </section>
        )}

        {/* 3. Skill Development */}
        {skills && (
          <section id="skills" className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Rocket className="w-4 h-4" />
                Skill Accelerator
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{skills.title}</h2>
              <p className="text-lg text-muted-foreground">{skills.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_DIVISIONS.map((division) => (
                <SkillDivisionCard key={division.id} division={division} />
              ))}
            </div>

            <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">What you get with NavLakshya Skill Division</h3>
                  <ul className="space-y-4">
                    {skills.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-accent" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="secondary" size="lg" className="rounded-full">
                    <Link to={ROUTE_PATHS.CONTACT}>Explore Skill Programs <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src={IMAGES.SKILL_TRAINING_1} 
                    alt="Skill Training" 
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Placement Cell */}
        {placement && (
          <section id="placement" className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Briefcase className="w-4 h-4" />
                Career Launchpad
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{placement.title}</h2>
              <p className="text-lg text-muted-foreground">{placement.description}</p>
              
              <div className="space-y-4">
                {placement.objectives?.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
                    <div className="p-2 rounded-lg bg-background">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{obj}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                <Link to={ROUTE_PATHS.CONTACT}>Connect with Placement Cell</Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={IMAGES.PLACEMENT_1} alt="Placement 1" className="rounded-2xl h-full w-full object-cover shadow-lg" />
              <div className="flex flex-col gap-4">
                <img src={IMAGES.PLACEMENT_3} alt="Placement 3" className="rounded-2xl h-1/2 w-full object-cover shadow-lg" />
                <div className="h-1/2 bg-accent rounded-2xl p-6 flex flex-col justify-center text-accent-foreground">
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm font-medium">Hiring Partners Pan India</p>
                </div>
              </div>
            </motion.div>
          </section>
        )}
      </div>

      {/* Final CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-foreground text-background rounded-[2rem] p-12 text-center space-y-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold relative z-10">Ready to Transform Your Career?</h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto relative z-10">
            Join NavLakshya today and take the first step towards a structured and successful professional future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link to={ROUTE_PATHS.CONTACT}>Get Started Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-background text-background hover:bg-background hover:text-foreground">
              <Link to={ROUTE_PATHS.HOME}>Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
