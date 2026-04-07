import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { HeroSection } from "@/components/hero-section";
import { ProjectGrid } from "@/components/project-grid";
import { ServicesGrid } from "@/components/services-grid";
import { TechStack } from "@/components/tech-stack";
import { TestimonialSlider } from "@/components/testimonial-slider";

export const metadata: Metadata = {
  title: "Building Scalable Digital Solutions",
  description:
    "ITPort crafts modern software and web products with strong UX, high performance, and scalable architecture.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProjectGrid limit={3} />
      <TestimonialSlider />
      <TechStack />
      <CtaBanner />
    </>
  );
}
