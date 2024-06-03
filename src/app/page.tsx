"use client";

import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/Hero";
import LatestDrop from "@/components/LatestDrop";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import Slider from "@/components/Slider";

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rightDivRef = useRef(null);
  const leftDivRef = useRef(null);

  useGSAP(() => {
    gsap.to(".imageRef", {
      scale: 1.5,
      scrollTrigger: {
        trigger: ".imageRef",
        start: "top 90%",
        scrub: 1,
      },
    });

    gsap.from(leftDivRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      x: -100,
    });

    gsap.from(rightDivRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      x: 100,
    });

    const mainDiv = document.querySelector("#main");
    const cursor = document.querySelector("#cursor_pointer");
    const Image = document.querySelector(".imageRef");

    mainDiv?.addEventListener("mousemove", (e: any) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 88,
        duration: 1,
        ease: "back.out",
      });
    });

    Image?.addEventListener("mouseenter", () => {
      if (cursor) cursor.innerHTML = "View More";

      gsap.to(cursor, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: "6px",
        fontWeight: "500",
        scale: 2.5,
        duration: 0.25,
        ease: "bounce",
        backgroundColor: "white",
      });
    });

    Image?.addEventListener("mouseleave", () => {
      if (cursor) cursor.innerHTML = "";

      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "bounce",
        backgroundColor: "transparent",
      });
    });
  });

  return (
    <>
      <div id="main">
        <div
          id="cursor_pointer"
          className="w-8 h-8 bg-transparent  border-white border rounded-full z-[999] fixed pointer-events-none"
        ></div>
        <Hero />
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Image
            className="imageRef w-[780px] h-[500px] rotate-y-50 hover:opacity-30 hover:duration-200"
            src={
              "https://images.unsplash.com/photo-1716595792584-9546ff238176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={1920}
            width={1080}
            alt="photo"
          />
        </div>
        <LatestDrop />
        <Marquee />
        <TextReveal />
        <Slider />
      </div>
    </>
  );
};

export default Page;
