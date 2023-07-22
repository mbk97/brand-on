"use client";
import Blog from "@/components/blog/Blog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BrandOnLabs from "@/components/labs/BrandOnLabs";
import Offer from "@/components/offer/Offer";
import Services from "@/components/ourServices/Services";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Works from "@/components/works/Works";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-[#181818]">
      <Header />
      <Offer />
      <Works />
      <Services />
      <BrandOnLabs />
      <Testimonials />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}
