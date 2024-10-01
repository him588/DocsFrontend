"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownIcon } from "@/components/svg";
import { Editor } from "@tiptap/core";

function Dropdown({ editor }: { editor: Editor }) {
  const [isOpen, setIsOpen] = useState(false);
  // const editor = useCurrentEditor();
  if (!editor) {
    return null;
  }

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
        Heading
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
            className="absolute  mt-2 w-[150px] p-1 flex   justify-center items-center bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className=" w-full flex flex-col">
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`block cursor-pointer px-4  py-[6px] font-semibold rounded-md  text-[#7b7e89] hover:bg-gray-100 ${
                  editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }`}
              >
                Header
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`block cursor-pointer px-4  py-[6px] font-semibold rounded-md  text-[#7b7e89] hover:bg-gray-100 ${
                  editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                }`}
              >
                Title
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={`block cursor-pointer px-4  py-[6px] font-semibold rounded-md  text-[#7b7e89] hover:bg-gray-100 ${
                  editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                }`}
              >
                Subtitle
              </button>
              {/* <button className="block cursor-pointer px-4 py-[6px] font-semibold rounded-md  text-[#7b7e89] hover:bg-gray-100">
                Normal Text
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
