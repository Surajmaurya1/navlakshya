export const ROUTE_PATHS = {
  HOME: "/",
  PROGRAMS: "/programs",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export interface Program {
  id: string;
  title: string;
  fullName?: string;
  description: string;
  objectives?: string[];
  eligibility?: string;
  structure?: string[];
  benefits: string[];
  iconName: string;
}

export interface SkillDivision {
  id: string;
  name: string;
  description: string;
  modules: string[];
  iconName?: string;
}

export const PROGRAMS_DATA: Program[] = [
  {
    id: "aibmsp",
    title: "AIBMSP Scholarship",
    fullName: "All India Bright Minds Scholarship Program",
    description: "A national-level scholarship examination designed to identify and reward bright students across India. We aim to bridge the financial gap and provide a clear roadmap for academic success.",
    objectives: [
      "Identify academic excellence across India",
      "Provide financial scholarship support to deserving candidates",
      "Offer structured career guidance after result declaration"
    ],
    eligibility: "Students from Class 8 to Graduation are eligible to apply.",
    structure: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Academic Subject Knowledge",
      "General Career Awareness"
    ],
    benefits: [
      "Scholarship Awards & Financial Aid",
      "National Level Merit Certificate",
      "Personalized Career Roadmap Session",
      "Exclusive Skill Development Discounts"
    ],
    iconName: "Trophy"
  },
  {
    id: "counseling",
    title: "Career Counseling",
    description: "Scientific career assessments and expert one-on-one guidance to help students navigate complex educational and career choices with confidence.",
    objectives: [
      "Scientific Psychometric Assessment",
      "One-to-One Expert Guidance",
      "Career Pathway Planning",
      "College & Course Selection Support"
    ],
    eligibility: "Confused students, 10th & 12th students, Graduates, and Career switchers.",
    benefits: [
      "Detailed Strength & Weakness Analysis",
      "Skill Gap Identification Report",
      "Recommended Career Options",
      "Structured Action Roadmap"
    ],
    iconName: "BrainCircuit"
  },
  {
    id: "skills",
    title: "Skill Development",
    description: "Industry-oriented training programs designed to prepare students for high-demand white-collar careers in the corporate world.",
    objectives: [
      "Hands-on Industry Exposure",
      "Corporate Grooming & Communication",
      "Role-Specific Technical Training",
      "Certification by Industry Experts"
    ],
    eligibility: "Graduates and final-year students seeking corporate entry.",
    benefits: [
      "Industry Recognized Certification",
      "Internship Recommendations",
      "Placement Support Access",
      "Real-world Project Experience"
    ],
    iconName: "Rocket"
  },
  {
    id: "placement",
    title: "Placement Cell",
    description: "Our dedicated Career Launchpad connects trained talent with top-tier hiring companies for internships and entry-level corporate roles.",
    objectives: [
      "Employer-Student Matching",
      "Corporate Referral Network",
      "Resume & Profile Optimization",
      "Interview Readiness"
    ],
    eligibility: "Registered students of NavLakshya Skill Programs.",
    benefits: [
      "Access to Exclusive Job Openings",
      "Professional Resume Review",
      "Mock Interview Sessions",
      "Career Mentorship from HR Professionals"
    ],
    iconName: "Briefcase"
  }
];

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3
  }).format(amount);
}