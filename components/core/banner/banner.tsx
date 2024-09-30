import React from "react";
import { Logo } from "../logo";
import Image from "next/image";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/svg";
import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.div
      className="h-full min-w-[200px] bg-[#fafafa] rounded-lg p-2 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Logo size="lg" logoColor="#374a61" textColor="#374a61" />
      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xl font-semibold text-[#374a61] leading-5">
          Build in team
        </p>
        <p className="text-sm text-[#6b7a89] font-extralight mt-[2px]">
          Collaborate in a team to create.
        </p>
      </motion.div>

      <motion.div
        className="mt-3 flex flex-col gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            alt=""
            src={"https://www.svgrepo.com/show/521559/chat-writing.svg"}
            width={20}
            height={20}
          />
          <p className="text-sm text-[#4f5f6f] font-bold">Start a live chat</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            alt=""
            src={"https://www.svgrepo.com/show/502647/email-open.svg"}
            width={20}
            height={20}
          />
          <p className="text-sm text-[#4f5f6f] font-bold">Shoot us an email</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xl font-semibold text-[#374a61] leading-5">
          Call us
        </p>
        <p className="text-sm text-[#6b7a89] font-extralight mt-[2px]">
          Call our team Mon-Fri from 24/7
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 mt-3 cursor-pointer"
        >
          <Image
            alt=""
            src={"https://www.svgrepo.com/show/533283/phone-call.svg"}
            width={20}
            height={20}
          />
          <p className="text-sm text-[#4f5f6f] font-bold">+91 8447162049</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xl font-semibold text-[#374a61] leading-5">
          Visit us
        </p>
        <p className="text-sm text-[#6b7a89] font-extralight mt-[2px]">
          Chat us in person at our Delhi, HQ
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 mt-3 cursor-pointer"
        >
          <Image
            alt=""
            src={"https://www.svgrepo.com/show/521726/location.svg"}
            width={20}
            height={20}
          />
          <p className="text-sm text-[#4f5f6f] font-bold">
            293B, New Delhi, India
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute flex gap-2 bottom-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="h-[40px] w-[40px] cursor-pointer rounded-full bg-[#374a61] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <FacebookIcon h={40} w={40} c="white" />
        </motion.div>
        <motion.div
          className="h-[40px] w-[40px] cursor-pointer rounded-full bg-[#374a61] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <LinkedinIcon h={25} w={25} c="white" />
        </motion.div>
        <motion.div
          className="h-[40px] w-[40px] cursor-pointer rounded-full bg-[#374a61] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <TwitterIcon h={25} w={25} c="white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Banner;
