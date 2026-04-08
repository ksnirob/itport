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
import patriotProject from "@/images/patriot.png";
import sixpackProject from "@/images/sixpack.png";
import thConsultingProject from "@/images/thconsulting.png";

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
    title: "Patriot Group BD",
    image: patriotProject,
    techStack: ["Corporate Website", "Garments Industry"],
    description: "100% export-oriented woven and knit garments manufacturer delivering quality at scale.",
    liveUrl: "https://patriotgroupbd.com",
  },
  {
    title: "TH Consulting",
    image: thConsultingProject,
    techStack: ["Business Consulting", "Market Entry"],
    description: "Helping global companies enter and grow in Kenya and East Africa through expert strategy.",
    liveUrl: "https://thconsulting.ke",
  },
  {
    title: "Six Pack Fitness",
    image: sixpackProject,
    techStack: ["Gym Website", "Fitness Brand"],
    description: "A modern gym website built to promote training programs, memberships, and brand growth.",
    liveUrl: "http://sixpack-fitness.com",
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
  {
    name: "Mahin Chowdhury",
    role: "CTO, UrbanCart",
    quote:
      "They improved our storefront performance and checkout flow so dramatically that conversion rose within the first sprint.",
  },
  {
    name: "Rachel Turner",
    role: "Operations Lead, MedAxis",
    quote:
      "ITPort brought structure to a messy legacy platform and delivered a modern system our team can confidently scale.",
  },
  {
    name: "Omar Siddiqui",
    role: "Director, BrightPath Learning",
    quote:
      "Communication was clear, delivery was on time, and the final product quality exceeded what we expected.",
  },
  {
    name: "Sabrina Collins",
    role: "Founder, Nova Studio",
    quote:
      "Their design and engineering team understood our brand immediately and turned our vision into a polished digital experience.",
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
