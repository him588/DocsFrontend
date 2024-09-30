"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Logo } from "../logo";
import {
  Chaticon,
  FilesIcon,
  HomeIcon,
  LogoutIcon,
  UsersIcon,
} from "@/components/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const sidebarpart = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      route: "dashboard",
    },
    {
      name: "Files",
      icon: FilesIcon,
      route: "files",
    },
    {
      name: "Conversation",
      icon: Chaticon,
      route: "conversation",
    },
    {
      name: "Users",
      icon: UsersIcon,
      route: "users",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col items-center  py-4  ">
      <Logo
        variant="minimal"
        text="xl"
        size="sm"
        logoColor="white"
        textColor="#FFFFFF"
      />
      <div className=" mt-4 flex flex-col items-center">
        <Image
          src={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBwcm9maWxlfGVufDB8fDB8fHww"
          }
          alt=""
          height={50}
          width={50}
          unoptimized
          className=" w-[60px] h-[60px] rounded-full border-[4px] object-cover border-solid border-[#677b8e]"
        />
        <p className=" text-white font-light text-lg ">Jane Copper</p>
        <p className=" leading-[100%] text-sm text-[#8091a1]">
          Janecopper@gmail.com
        </p>
      </div>
      <div className="mt-7  flex flex-col gap-1 ">
        {sidebarpart.map((part, index) => (
          <Sidepart
            key={index}
            name={part.name}
            Icon={part.icon}
            route={part.route}
          />
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className=" h-[50px] w-[50px] cursor-pointer flex items-center justify-center  rounded-xl border-[1.4px] absolute bottom-10 border-[#8091a1] border-solid"
      >
        <LogoutIcon h={25} w={25} c="#8091a1" />
      </motion.div>
    </div>
  );
}

function Sidepart({
  name,
  Icon,
  route,
}: {
  name: string;
  Icon: React.ComponentType<{ h: number; w: number; c: string }>;
  route: string;
}) {
  const pathname = usePathname().split("/")[1];
  const isCurrentRoute = pathname === route;

  return (
    <Link href={`/${route}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className={`flex gap-3 p-2 rounded-xl items-center cursor-pointer ${
          isCurrentRoute ? "bg-[#5e7488] text-white" : "text-[#8091a1]"
        }`}
      >
        <Icon h={22} w={22} c={isCurrentRoute ? "white" : "#8091a1"} />
        <p>{name}</p>
      </motion.div>
    </Link>
  );
}

export default Sidebar;
