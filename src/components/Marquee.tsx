import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CgArrowLongLeftR } from "react-icons/cg";

const Marquee = () => {
  useGSAP(() => {
    gsap.to(".marquee", {
      duration: 120,
      transform: "translate(-110%)",
      repeat: -1,
    });
  });

  return (
    <div className="w-full h-1/2 bg-zinc-950 flex flex-col gap-4">
      <div className="marquee w-[150em] flex-nowrap bg-[#FFDB00] h-[250px] text-8xl py-8 gap-5 flex items-center text-black font-bold">
        <div className="flex-shrink-0 flex gap-5">
          <h2>WE WILL DO IT AGAIN</h2>
          <CgArrowLongLeftR size={108} className="rotate-180" />
        </div>
        <div className="flex-shrink-0 flex gap-5">
          <h2>WE WILL DO IT AGAIN</h2>
          <CgArrowLongLeftR size={108} className="rotate-180" />
        </div>
        <div className="flex-shrink-0 flex gap-5">
          <h2>WE WILL DO IT AGAIN</h2>
          <CgArrowLongLeftR size={108} className="rotate-180" />
        </div>
        <div className="flex-shrink-0 flex gap-5">
          <h2>WE WILL DO IT AGAIN</h2>
          <CgArrowLongLeftR size={108} className="rotate-180" />
        </div>
        <div className="flex-shrink-0 flex gap-5">
          <h2>WE WILL DO IT AGAIN</h2>
          <CgArrowLongLeftR size={108} className="rotate-180" />
        </div>
        <div className="flex-shrink-0 flex gap-5">
          <h2>WE WILL DO IT AGAIN</h2>
          <CgArrowLongLeftR size={108} className="rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
