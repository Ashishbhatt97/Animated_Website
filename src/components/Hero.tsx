import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const rightDivRef = useRef(null);
  const leftDivRef = useRef(null);

  useGSAP(() => {
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
  });
  return (
    <div className="w-full h-[64vh] bg-zinc-900 flex items-center justify-center overflow-hidden">
      <section className="w-full pt-12 md:pt-12 lg:pt-12">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-16 md:grid-cols-2 md:gap-16">
            <div ref={leftDivRef}>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Discover the Future of Digital Art
              </h1>
            </div>
            <div
              ref={rightDivRef}
              className="flex flex-col items-start space-y-4"
            >
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore and collect the most exclusive NFTs from renowned
                artists and creators.
              </p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore Marketplace
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Create NFT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
