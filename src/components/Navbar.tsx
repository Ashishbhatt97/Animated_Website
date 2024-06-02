"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".link", {
      opacity: 0,
      y: -100,
      stagger: 0.2,
      duration: 1,
    });
  });

  return (
    <div className="h-[80px] w-full flex items-center justify-evenly text-sm">
      <Link className="link" href={"/"}>
        Home
      </Link>
      <Link className="link" href={"/"}>
        All Collection
      </Link>
      <Link className="link" href={"/"}>
        Latest Arrives
      </Link>
      <Link className="link" href={"/"}>
        Contact
      </Link>
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="link font-semibold bg-white w-[120px] h-[40px] rounded-full flex items-center justify-center text-black active:scale-95"
        >
          login
        </Link>
        <FaCircleUser size={32} className=" link cursor-pointer" />
        <BsCart2 size={32} className=" link ml-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
