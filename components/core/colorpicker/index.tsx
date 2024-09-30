"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownIcon } from "@/components/svg";

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block h-full text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className={`px-2  h-full flex items-center gap-2  text-[#7b7e89] hover:bg-[#f2f2f3] font-semibold outline-none  rounded-md ${
          isOpen ? " bg-[#f2f2f3]" : ""
        }`}
      >
        <div className=" h-[25px] w-[25px] bg-[#3f7de8] rounded-sm"></div>
        <div
          className={` transition-all duration-200 ${
            isOpen ? "rotate-180" : " rotate-0"
          }`}
        >
          <DownIcon h={20} w={20} c="#7b7e89" />
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute  mt-2  p-1 flex  flex-col gap-3 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="px-1 flex flex-col items-start">
              <p className=" font-semibold text-[#707480]">Color</p>
              <div className="  flex gap-2">
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#3f7de8] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#893fe8] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#67bd67] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#f0c422] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#99d6be] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#de6058] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#acb8c4] h-[30px] w-[30px]"></div>
                </div>
              </div>
            </div>
            <div className="px-1 flex flex-col items-start">
              <p className=" font-semibold text-[#707480]">Highlight</p>
              <div className="  flex gap-2">
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#3f7de8] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#893fe8] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#67bd67] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#f0c422] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#99d6be] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#de6058] h-[30px] w-[30px]"></div>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <div className=" rounded-sm bg-[#acb8c4] h-[30px] w-[30px]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
