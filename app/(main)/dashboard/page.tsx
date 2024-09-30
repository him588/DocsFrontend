"use client";
import React, { useState, useEffect } from "react";
import { DownIcon, NotificationIcon, SearchIcon } from "@/components/svg";
import { motion, AnimatePresence } from "framer-motion";
import { Addnewfile } from "@/components/pages/dashboard";

function Page() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [document, setDocument] = useState([]);
  useEffect(() => {
    const getAllFiles = async () => {
      try {
        const response = await fetch("http://localhost:8000/file/view", {
          credentials: "include",
        });
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setDocument(result.data);
          } else {
            console.error("Failed to fetch files:", result.message);
          }
        } else {
          console.error("HTTP error:", response.status, response.statusText);
        }
        // ... rest of the function
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    getAllFiles();
  }, []);
  
  if (typeof document !== 'undefined') {
    console.log(document);
  }
  // console.log(document)
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" px-10 py-4 z-40 relative">
      {/* NAV BAR */}
      <div className="flex items-center justify-between">
        {/* Search Box with Hover/Focus Animation */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.02 }}
          className="w-[230px] h-[35px] rounded-md bg-white flex items-center px-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
        >
          <SearchIcon h={18} w={18} c="#7e87a1" />
          <input
            type="text"
            className="w-[90%] h-full outline-none text-[#7e87a1] px-1 text-sm"
            placeholder="Search"
          />
        </motion.div>

        {/* Notification Icon with a Bounce Animation on Click */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
          className="h-[35px] w-[35px] cursor-pointer relative z-40 bg-white rounded-md flex items-center justify-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
        >
          <NotificationIcon h={20} w={20} c="#7e87a1" />
        </motion.div>
      </div>

      {/* SMALL HEADING */}
      <div className=" mt-4  flex items-center justify-between relative z-40">
        <p className=" text-2xl  font-medium text-[#7e87a1]">Documents</p>
        <div
          onClick={toggleExpand}
          className="text-[#7e87a1]  flex items-center gap-1 cursor-pointer"
        >
          <motion.p
            key={isExpanded ? "showLess" : "showMore"}
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </motion.p>
          <div
            className={`transition-all duration-100 ${
              isExpanded ? " rotate-180" : " rotate-0"
            }`}
          >
            <DownIcon h={20} w={20} c="#7e87a1" />
          </div>
        </div>
      </div>
      {/* ADD NEW DOCS  */}
      <div className=" mt-1 grid grid-cols-4 gap-4">
        <Addnewfile />

        {document.map((item,index)=> <div key={index} className=" w-[100%] h-[200px] bg-white rounded-xl "></div>)}
        
      </div>

      {/* SHOW CONTENT  */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#7e87a1] mt-2">
              Here are your expanded files and content. This section expands and
              collapses based on the toggle.
            </p>
            {/* Add your file list or content here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Page;
