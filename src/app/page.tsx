'use client'
import HeroSection from "@/Components/HeroSection";
import FearuredCourses from "@/Components/FearuredCourses";
import ScrollColorChange from "@/Components/ScrollColorChange";
import TestimonialCards from "@/Components/TestimonialCards";
import PlaySection from "@/Components/PlaySection";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import Instructors from "@/Components/Instructors";

export default function Home() {
  return (
    <div className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FearuredCourses />
      <ScrollColorChange />
      <TestimonialCards />
      <PlaySection />
      <UpcomingWebinars />
      <Instructors />
    </div>
  );
}
