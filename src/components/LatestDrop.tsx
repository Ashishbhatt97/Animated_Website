import { profiles } from "@/app/constants/latestDropsProfile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const LatestDrop = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".latestDrop", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".latestDrop",
        start: "top 80%",
      },
    });
  });

  return (
    <div className="w-full h-[100vh] mt-16">
      <div className="w-full h-[100px] flex items-center justify-center text-[100px] font-bold">
        LATEST DROPS
      </div>

      <section className="h-[80vh] w-full  flex justify-evenly items-center">
        {profiles.map((profile, idx) => (
          <div key={idx}>
            <div className="latestDrop w-[300px] h-[400px] bg-slate-950/50 rounded-[24px] p-6 flex flex-col">
              <div className="pics w-[240px] h-[250px] bg-gray-900 rounded-[16px] overflow-hidden">
                <Image
                  src={profile.ImageSource}
                  width={500}
                  height={500}
                  alt="pp"
                  className="imageRef object-cover h-full w-full overflow-hidden"
                />
              </div>
              <div className="flex gap-1 flex-col">
                <div className="text-base font-normal mt-2 text-gray-100/50">
                  {profile.username}
                </div>
                <Link
                  href={"/"}
                  className="text-xs text-center mt-5 w-fit px-4 py-2 bg-white text-black rounded-lg"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LatestDrop;
