import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  MessageSquare,
  Clock
} from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";
import { CONTACT_INFO } from "@/data/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    toast.success("Message sent successfully! We will get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Have questions about our scholarship programs, career counseling, or skill development training? 
              Our team is here to guide you toward professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                NavLakshya is an initiative of {CONTACT_INFO.company}, dedicated to empowering India's future through structured career ecosystems.
              </p>

              <div className="grid gap-6">
                <Card className="border-none shadow-sm bg-secondary/50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-secondary/50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-secondary/50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Address</h3>
                      <p className="text-muted-foreground">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-secondary/50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold mb-4 uppercase text-xs tracking-widest text-muted-foreground">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <a 
                    href={CONTACT_INFO.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <SiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={CONTACT_INFO.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={CONTACT_INFO.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border shadow-lg">
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our career experts will reach out to you within 24-48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        {...register("subject")}
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-xs text-destructive">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you today?"
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-destructive resize-none" : "resize-none"}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-semibold group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Clock className="w-5 h-5 animate-spin" /> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 p-4 bg-muted/50 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to receive communications regarding our scholarship programs and career guidance services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple Map / Location Visualization Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-2xl border-2 border-dashed border-border bg-background/50 flex flex-col items-center justify-center space-y-4">
            <Globe className="w-12 h-12 text-muted-foreground/40" />
            <h3 className="text-xl font-semibold">National Presence</h3>
            <p className="text-muted-foreground">
              While our registered office is in India, NavLakshya operates nationally, supporting students from every corner of the country through our digital assessment and training platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Career?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Don't wait for the right opportunity. Create it with NavLakshya's structured skill development and scholarship programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" className="font-bold">
                  Explore Programs
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white hover:bg-white hover:text-primary transition-colors font-bold">
                  Book Counseling
                </Button>
              </div>
            </div>
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
          </div>
        </div>
      </section>
    </div>
  );
}
