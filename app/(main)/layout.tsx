"use client";
import React from "react";
import Sidebar from "@/components/core/sidebar";
import { motion } from "framer-motion";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-screen flex items-center  bg-[#425b73]">
      <div className=" min-w-[200px] w-[20%]">
        <Sidebar />
      </div>
      <div className=" min-w-[100%-200px] w-[80%]  relative h-full bg-[#ebf1fa] rounded-l-[20px] overflow-hidden">
        <motion.div
          className="w-[300px] h-[300px] absolute top-0 right-0 bg-opacity-100 blur-[50px]"
          style={{
            backgroundColor: "rgb(245, 230, 250)",
          }}
          animate={{
            rotate: [0, 90, 180, 270, 360], // Rotation in degrees
            x: [0, 200, 0, -200, 0], // Move horizontally
            y: [0, 0, 200, 0, -200], // Move vertically
          }}
          transition={{
            duration: 10, // Duration of the full rotation (in seconds)
            ease: "linear", // Linear transition for smooth rotation
            repeat: Infinity, // Infinite repeat
          }}
        ></motion.div>
        <div className=" h-full w-full relative z-20">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
