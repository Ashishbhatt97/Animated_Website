import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const TextReveal = () => {
  useGSAP(() => {
    gsap.from(".revealText span", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".revealText",
        start: "top 70%",
      },
    });
  });

  return (
    <div className="h-screen w-full bg-blue-600/20 flex items-center justify-center">
      <div className="overflow-hidden">
        <h1 className="revealText text font-bold uppercase tracking-widest text-[7em] font-['poppins']">
          {"WE.THE.BEST".split("").map((char, index) => (
            <span className="inline-block" key={index}>
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default TextReveal;
