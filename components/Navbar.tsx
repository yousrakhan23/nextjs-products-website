'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/utils";
import Link from "next/link";
import { color } from "framer-motion";

export default function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);

  return (
    
    <ul className="flex items-center justify-right gap-x-10 bg-black hover:bg-white rounded-s-full ">

      <Menu setActive={setActive}>

        <Link href={"/"}><MenuItem setActive={setActive} active={active} item=""></MenuItem></Link>

        <MenuItem setActive={setActive} active={active} item="Our Products">
          <div className="flex flex-col space-y-4 text-sm">

            <HoveredLink href="/products">Shampoo</HoveredLink>
            <HoveredLink href="/products">Conditioner</HoveredLink>
            <HoveredLink href="/products">Oil</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact us"}></Link>
        
      </Menu>
      <li> <Link href='/home' className="text-xl">Home</Link></li>

      <li> <Link href='/about' className="text-xl">About Us</Link></li>

      <li> <Link href='/contact' className="text-xl">Contact Us</Link></li>
    </ul>
    
  );
}

