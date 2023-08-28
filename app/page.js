"use client";
import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BrandOnLabs from "@/components/labs/BrandOnLabs";
import Offer from "@/components/offer/Offer";
import Services from "@/components/ourServices/Services";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Works from "@/components/works/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#181818]">
      <DefaultSeo
        title="BrandOn, Marketing, Branding, SEO, Research & Analytics, Marketing Strategy, Copywriting & Content, Website Development & Upgrade, Digital Media Management & Ads Campaign, Brand Identity Design, Experiential marketing, Product Design"
        description="Branding and Marketing agency in Nigeria using market research and data to create marketing strategies - Web dev, Social Media, SEO, PPC.Increased awareness for brands across tech, hospitality, healthcare and FMCG industries etc."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://growwithbrandon.com/",
          siteName: "Brandon",
        }}
        twitter={{
          handle: "_BrandOnteam",
          site: "https://twitter.com/_BrandOnteam?s=20",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <About />
      <Offer />
      <Works />
      <Services />
      <BrandOnLabs />
      <Testimonials />
      <div className="h-[90px] bg-white" /> {/*remove this later*/}
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}
