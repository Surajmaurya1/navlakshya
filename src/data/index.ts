import { SkillDivision } from "@/lib/index";

export const SKILL_DIVISIONS: SkillDivision[] = [
  {
    id: "mechanical",
    name: "Mechanical Division",
    description: "Preparing students for core industrial operations and production management roles.",
    iconName: "Settings",
    modules: [
      "Production Management",
      "Quality Control",
      "CAD Basics",
      "Industrial Operations"
    ]
  },
  {
    id: "it",
    name: "IT Division",
    description: "Foundational training for the rapidly evolving digital landscape and software industry.",
    iconName: "Code",
    modules: [
      "Software Development Basics",
      "Web Development",
      "Data Analytics Fundamentals",
      "AI & Automation Introduction"
    ]
  },
  {
    id: "operations",
    name: "Operations Division",
    description: "Mastering the backbone of corporate efficiency and supply chain management.",
    iconName: "Layers",
    modules: [
      "Business Operations",
      "Supply Chain Basics",
      "Process Management"
    ]
  },
  {
    id: "hr",
    name: "HR Division",
    description: "Specialized training in people management, talent acquisition, and compliance.",
    iconName: "Users",
    modules: [
      "HR Operations",
      "Talent Acquisition",
      "Payroll & Compliance Basics"
    ]
  },
  {
    id: "marketing",
    name: "Marketing Division",
    description: "Developing modern strategies for brand building and digital market presence.",
    iconName: "TrendingUp",
    modules: [
      "Digital Marketing",
      "Social Media Marketing",
      "Branding Strategy"
    ]
  },
  {
    id: "sales",
    name: "Sales Division",
    description: "Training in high-impact corporate sales and B2B negotiation techniques.",
    iconName: "DollarSign",
    modules: [
      "Corporate Sales",
      "B2B Sales Techniques",
      "Communication & Negotiation"
    ]
  },
  {
    id: "special",
    name: "Special Corporate Programs",
    description: "Essential grooming and soft skills for a smooth transition into professional life.",
    iconName: "Sparkles",
    modules: [
      "Corporate Grooming",
      "Resume Building",
      "Interview Preparation",
      "Corporate Communication"
    ]
  }
];

export const PROGRAM_BENEFITS = [
  {
    title: "Identify Talent",
    description: "Our National Scholarship Exams (AIBMSP) help discover academic excellence early.",
    iconName: "Search"
  },
  {
    title: "Scientific Guidance",
    description: "Professional psychometric assessments to find your true career calling.",
    iconName: "Brain"
  },
  {
    title: "Build Skills",
    description: "Industry-aligned training programs that bridge the gap between degree and job.",
    iconName: "Cpu"
  },
  {
    title: "Create Careers",
    description: "Dedicated placement support connecting you with top white-collar opportunities.",
    iconName: "Award"
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Arjun Sharma",
    role: "AIBMSP Scholar",
    content: "The AIBMSP scholarship not only provided financial support but also gave me a clear career roadmap through their counseling session.",
    avatar: "https://i.pravatar.cc/150?u=arjun"
  },
  {
    id: "2",
    name: "Priya Verma",
    role: "Placed as HR Executive",
    content: "The HR Skill Division training was practical and industry-focused. I felt confident during my interviews thanks to the mock sessions.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: "3",
    name: "Rahul Mehta",
    role: "Graduate Student",
    content: "I was confused about my career after 12th. NavLakshya's scientific counseling helped me choose the right degree and specialization.",
    avatar: "https://i.pravatar.cc/150?u=rahul"
  }
];

export const CONTACT_INFO = {
  email: "info@navlakshya.in",
  phone: "+91-XXXXXXXXXX",
  website: "www.navlakshya.in",
  company: "Streamcore Web Pvt Ltd",
  address: "Registered Office Address, India",
  social: {
    instagram: "https://instagram.com/navlakshya",
    facebook: "https://facebook.com/navlakshya",
    linkedin: "https://linkedin.com/company/navlakshya"
  }
};