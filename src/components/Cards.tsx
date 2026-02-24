import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Trophy,
  BrainCircuit,
  Rocket,
  Briefcase,
  Settings,
  Code,
  Layers,
  Users,
  TrendingUp,
  DollarSign,
  Sparkles,
  Search,
  Brain,
  Cpu,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Program, SkillDivision, ROUTE_PATHS } from "@/lib/index";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const IconMap: Record<string, any> = {
  Trophy,
  BrainCircuit,
  Rocket,
  Briefcase,
  Settings,
  Code,
  Layers,
  Users,
  TrendingUp,
  DollarSign,
  Sparkles,
  Search,
  Brain,
  Cpu,
  Award
};

export function ProgramCard({ program }: { program: Program }) {
  const Icon = IconMap[program.iconName] || Trophy;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group">
        <div className="h-1.5 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardHeader>
          <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4">
            <Icon className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
          {program.fullName && (
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {program.fullName}
            </p>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base leading-relaxed text-foreground/80">
            {program.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="group/btn px-0 hover:bg-transparent">
            <Link
              to={`${ROUTE_PATHS.PROGRAMS}#${program.id}`}
              className="flex items-center gap-2 text-primary font-semibold"
            >
              Learn Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function SkillDivisionCard({ division }: { division: SkillDivision }) {
  const Icon = IconMap[division.iconName || "Settings"] || Settings;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Card className="h-full border-border/50 hover:border-primary/50 transition-colors shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-lg">{division.name}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {division.description}
          </p>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-foreground/70 uppercase tracking-tighter">
              Core Modules
            </p>
            <ul className="grid grid-cols-1 gap-2">
              {division.modules.map((module, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {module}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function BenefitCard({ benefit }: { benefit: { title: string; description: string; iconName: string } }) {
  const Icon = IconMap[benefit.iconName] || Award;

  return (
    <Card className="border-none shadow-none bg-transparent group">
      <CardHeader className="px-0">
        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <CardTitle className="mb-2 text-xl">{benefit.title}</CardTitle>
        <CardDescription className="text-base">{benefit.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: { id: string; name: string; role: string; content: string; avatar: string } }) {
  return (
    <Card className="h-full border-border/40 bg-card shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 border-2 border-primary/10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-foreground">{testimonial.name}</p>
            <Badge variant="secondary" className="text-[10px] uppercase font-bold px-1.5 py-0">
              {testimonial.role}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic leading-relaxed">
          "{testimonial.content}"
        </p>
      </CardContent>
    </Card>
  );
}
