import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Link, UserCheck, Building2, Users } from 'lucide-react';
import { CONTACT_INFO } from '@/data/index';
import { IMAGES } from '@/assets/images';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const coreValues = [
    {
      title: "Transparency",
      description: "We maintain complete clarity in our scholarship processes and career guidance metrics.",
      icon: ShieldCheck
    },
    {
      title: "Merit-Based Recognition",
      description: "Identifying and rewarding talent solely based on academic and aptitude excellence.",
      icon: Award
    },
    {
      title: "Industry Alignment",
      description: "Our training modules are designed in collaboration with corporate experts to ensure relevance.",
      icon: Link
    },
    {
      title: "Student-Centric Approach",
      description: "Every initiative is crafted keeping the student's long-term career success as the priority.",
      icon: UserCheck
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src={IMAGES.TEAM_1} 
            alt="Team Background" 
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              Our Identity
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Empowering India's Future Through <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NavLakshya is a structured education and career transformation initiative focused on scholarship, 
              skill development, and placement solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & Company Info */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                <Building2 className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-sm">The Organization</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Part of {CONTACT_INFO.company}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                NavLakshya operates as the flagship Education & Career Empowerment Initiative of 
                <strong> Streamcore Web Pvt Ltd</strong>. We represent a convergence of technology and pedagogy, 
                aiming to revolutionize how students prepare for their professional journeys.
              </p>
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <p className="italic text-foreground/80">
                  "Our mission is simple — Identify Talent. Build Skills. Create Careers. We guide students 
                  from academic excellence to professional success through a scientific ecosystem."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
            >
              <img 
                src={IMAGES.TEAM_5} 
                alt="NavLakshya Environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="p-10 rounded-3xl bg-primary text-primary-foreground shadow-xl"
            >
              <Eye className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To build India’s largest structured career ecosystem for students, creating a seamless pathway 
                from the classroom to the boardroom.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="p-10 rounded-3xl bg-white border border-border shadow-xl"
            >
              <Target className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To bridge the gap between education and employment by providing merit-based recognition, 
                industry-aligned skills, and corporate placement access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-background/60">
              The principles that guide every decision we make at NavLakshya.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-background/60 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-accent rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Users className="w-32 h-32" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
                Join thousands of students who have transformed their careers through our structured ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/programs" 
                  className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-lg transition-all active:scale-95"
                >
                  Explore Programs
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-3 bg-transparent border border-accent-foreground/20 text-accent-foreground font-bold rounded-full hover:bg-accent-foreground/5 transition-all active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Copyright Notice Footer Hook */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 NavLakshya. All rights reserved. A brand of {CONTACT_INFO.company}.
        </div>
      </footer>
    </div>
  );
}
