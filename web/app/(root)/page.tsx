"use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

import About from "@/layouts/root/About";
import Hero from "@/layouts/root/Hero";
import Story from "@/layouts/root/Story";
import Testimonial from "@/layouts/root/Testimonial";
import AssetGallery from "@/layouts/root/AssetGallery";
import { Footer } from "@/layouts/root/Footer";
import { GameMechanics } from "@/layouts/root/GameMechanics";

// export const runtime = "edge";

const RootPage = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: DOMHighResTimeStamp) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });

  return (
    <>
      <Hero />
      <About />
      <GameMechanics />
      <AssetGallery />
      <Story />
      <Testimonial />
      <Footer />
    </>
  );
};

export default RootPage;
