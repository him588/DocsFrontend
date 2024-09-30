"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CenterAlignIcon,
  LeftalignIcon,
  RightAlignIcon,
} from "@/components/svg";

const TextAlign = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block h-full text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className={`  h-full w-[35px] flex items-center justify-center gap-2  text-[#7b7e89] hover:bg-[#f2f2f3] font-semibold outline-none  rounded-md ${
          isOpen ? " bg-[#f2f2f3]" : ""
        }`}
      >
        <CenterAlignIcon h={25} w={25} c="#7b7e89" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute  mt-2  p-1 flex   justify-center items-center bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className=" h-full flex gap-1">
              <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
                <LeftalignIcon h={25} w={25} c="#7b7e89" />
              </div>
              <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
                <CenterAlignIcon h={24} w={24} c="#7b7e89" />
              </div>
              <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
                <RightAlignIcon h={25} w={25} c="#7b7e89" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextAlign;
