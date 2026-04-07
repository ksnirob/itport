import {
  Blocks,
  Brush,
  Code2,
  Cpu,
  Database,
  Globe,
  Handshake,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Performance-first websites and web apps built with modern frameworks and clean architecture.",
    benefits: ["Mobile-first interfaces", "SEO-ready implementation", "Fast Core Web Vitals"],
  },
  {
    title: "Custom Software Development",
    icon: Blocks,
    description:
      "Tailored software solutions aligned to your business operations, growth plans, and workflows.",
    benefits: ["Business-specific logic", "Scalable architecture", "Reliable delivery process"],
  },
  {
    title: "UI/UX Design",
    icon: Brush,
    description:
      "Human-centered product design that improves usability and drives meaningful engagement.",
    benefits: ["Conversion-focused journeys", "Design systems", "Accessible interfaces"],
  },
  {
    title: "API & Backend Development",
    icon: Database,
    description:
      "Secure, resilient backend systems and APIs powering web, mobile, and third-party integrations.",
    benefits: ["Robust data models", "Secure authentication", "Integration-ready endpoints"],
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    description:
      "Ongoing support, monitoring, and iteration to keep your product stable, secure, and evolving.",
    benefits: ["Proactive updates", "Issue resolution", "Continuous optimization"],
  },
] as const;

export const featuredProjects = [
  {
    title: "FinEdge Dashboard",
    image: "/projects/project-1.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    description: "A real-time financial analytics platform for enterprise decision-making.",
  },
  {
    title: "CareFlow Portal",
    image: "/projects/project-2.svg",
    techStack: ["React", "Node.js", "MongoDB"],
    description: "A patient engagement portal with secure messaging and booking workflows.",
  },
  {
    title: "Retail Nexus",
    image: "/projects/project-3.svg",
    techStack: ["Next.js", "Prisma", "Stripe"],
    description: "A headless commerce experience with personalized storefronts and checkout.",
  },
  {
    title: "OpsPilot Suite",
    image: "/projects/project-4.svg",
    techStack: ["Vue", "NestJS", "Redis"],
    description: "An operations automation suite that streamlined internal logistics by 40%.",
  },
  {
    title: "LegalSync",
    image: "/projects/project-5.svg",
    techStack: ["React", "Go", "GraphQL"],
    description: "A legal workflow product centralizing document lifecycle and approvals.",
  },
  {
    title: "PulseTrack IoT",
    image: "/projects/project-6.svg",
    techStack: ["Svelte", "Python", "Timescale"],
    description: "An IoT monitoring dashboard with anomaly detection and alert orchestration.",
  },
] as const;

export const testimonials = [
  {
    name: "Nadia Rahman",
    role: "COO, Finora Labs",
    quote:
      "ITPort translated complex business requirements into a robust product that our users actually love.",
  },
  {
    name: "Daniel Brooks",
    role: "Founder, Careloop",
    quote:
      "From product strategy to launch quality, the team delivered speed without compromising reliability.",
  },
  {
    name: "Aisha Karim",
    role: "Head of Product, Nexa Retail",
    quote:
      "The collaboration felt like an extension of our internal team. Execution was sharp and thoughtful.",
  },
] as const;

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
];

export const trustPoints = [
  {
    title: "Product-Minded Engineering",
    icon: Sparkles,
    text: "We combine technical depth with product thinking to build software users adopt quickly.",
  },
  {
    title: "Reliable Delivery",
    icon: ShieldCheck,
    text: "Predictable milestones, transparent communication, and high-quality implementation.",
  },
  {
    title: "Long-Term Partnership",
    icon: Handshake,
    text: "We stay involved post-launch to optimize performance and support future growth.",
  },
  {
    title: "Modern Tech Stack",
    icon: Cpu,
    text: "We choose proven technologies that scale with your product and team.",
  },
  {
    title: "Quality Standards",
    icon: Code2,
    text: "Clean architecture, testable modules, and maintainable code from day one.",
  },
];
