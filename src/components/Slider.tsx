import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Slider = () => {
  useGSAP(() => {
    gsap.to(".content h1", {
      transform: "translateX(-100%)",
      duration: 2,
      scrollTrigger: {
        trigger: ".content",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <>
      <div className="content text-[22em] h-screen  overflow-hidden bg-green-900 w-full py-8">
        <h1 className="uppercase font-bold font-['Gilroy']">Mesmerising</h1>
      </div>
      <div className="content text-[22em] h-screen  overflow-hidden bg-zinc-900 w-full py-8"></div>
    </>
  );
};

export default Slider;
