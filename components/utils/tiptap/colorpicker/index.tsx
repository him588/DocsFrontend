"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownIcon, NotIcon } from "@/components/svg";
import { Editor } from "@tiptap/core";

const ColorPicker = ({ editor }: { editor: Editor }) => {
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
        <input
          type="color"
          onClick={(e) => e.stopPropagation()}
          className=" h-[25px] w-[25px]  rounded-sm cursor-pointer"
          onInput={(event) => {
            event.stopPropagation();
            editor.chain().focus().setColor(event.currentTarget.value).run();
          }}
          value={editor.getAttributes("textStyle").color}
          data-testid="setColor"
        />

        {/* <div className=" h-[25px] w-[25px] bg-[#3f7de8] rounded-sm"></div> */}
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
                  <button
                    onClick={() =>
                      editor.chain().focus().setColor("#3f7de8").run()
                    }
                    data-testid="#3f7de8"
                    className={`rounded-sm bg-[#3f7de8] h-[30px] w-[30px] ${
                      editor.isActive("textStyle", { color: "#958DF1" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor.chain().focus().setColor("#893fe8").run()
                    }
                    data-testid="#893fe8"
                    className={`rounded-sm bg-[#893fe8] h-[30px] w-[30px] ${
                      editor.isActive("textStyle", { color: "#893fe8" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor.chain().focus().setColor("#67bd67").run()
                    }
                    data-testid="#3f7de8"
                    className={`rounded-sm bg-[#67bd67] h-[30px] w-[30px] ${
                      editor.isActive("textStyle", { color: "#67bd67" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor.chain().focus().setColor("#f0c422").run()
                    }
                    data-testid="#3f7de8"
                    className={`rounded-sm bg-[#f0c422] h-[30px] w-[30px] ${
                      editor.isActive("textStyle", { color: "#f0c422" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor.chain().focus().setColor("#de6058").run()
                    }
                    data-testid="#de6058"
                    className={`rounded-sm bg-[#de6058] h-[30px] w-[30px] ${
                      editor.isActive("textStyle", { color: "#de6058" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor.chain().focus().setColor("#99d6be").run()
                    }
                    data-testid="#99d6be"
                    className={`rounded-sm bg-[#99d6be] h-[30px] w-[30px] ${
                      editor.isActive("textStyle", { color: "#99d6be" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
              </div>
            </div>
            <div className="px-1 flex flex-col items-start">
              <p className=" font-semibold text-[#707480]">Highlight</p>
              <div className="  flex gap-2">
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#3f7de8" })
                        .run()
                    }
                    className={`rounded-sm bg-[#3f7de8] h-[30px] w-[30px] ${
                      editor.isActive("highlight", { color: "#958DF1" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#893fe8" })
                        .run()
                    }
                    className={`rounded-sm bg-[#893fe8] h-[30px] w-[30px] ${
                      editor.isActive("highlight", { color: "#893fe8" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#67bd67" })
                        .run()
                    }
                    className={`rounded-sm bg-[#67bd67] h-[30px] w-[30px] ${
                      editor.isActive("highlight", { color: "#67bd67" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#f0c422" })
                        .run()
                    }
                    className={`rounded-sm bg-[#f0c422] h-[30px] w-[30px] ${
                      editor.isActive("highlight", { color: "#f0c422" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#de6058" })
                        .run()
                    }
                    className={`rounded-sm bg-[#de6058] h-[30px] w-[30px] ${
                      editor.isActive("highlight", { color: "#de6058" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#99d6be" })
                        .run()
                    }
                    className={`rounded-sm bg-[#99d6be] h-[30px] w-[30px] ${
                      editor.isActive("highlight", { color: "#99d6be" })
                        ? "is-active"
                        : ""
                    } `}
                  ></button>
                </div>
                <div className=" p-1 rounded-sm hover:bg-[#f2f2f3] cursor-pointer">
                  <button
                    onClick={() =>
                      editor.chain().focus().toggleHighlight().run()
                    }
                    className={`rounded-sm  flex items-center justify-center h-[30px] w-[30px] ${
                      editor.isActive("highlight") ? "is-active" : ""
                    } `}
                  >
                    <NotIcon h={20} w={20} c="grey" />
                  </button>
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
