"use state";
import React, { useState } from "react";
import { AddIcon } from "@/components/svg";
import BasicModal from "@/components/core/model/model";
import { motion } from "framer-motion";
import Banner from "@/components/core/banner/banner";
import AddDocuments from "./addDocuments";

function Addnewfile() {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setShowModel(true)}
        className="w-full h-[200px] bg-[#f0f4f8] rounded-lg shadow-md overflow-hidden transition-all"
        whileHover={{
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Background with Complementary Light Color */}
        <div className="h-[80%] flex items-center justify-center">
          <motion.div
            className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <AddIcon h={40} w={40} c="#425b73" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#e0e0e0]"></div>

        {/* Text Section */}
        <div className="h-[20%] flex items-center justify-center text-[#425b73] font-medium text-base">
          Create File
        </div>
      </motion.div>

      {showModel ? (
        <BasicModal show={showModel} setShow={setShowModel}>
          <AddForm setShow={setShowModel} />
        </BasicModal>
      ) : (
        ""
      )}
    </>
  );
}

export default Addnewfile;

function AddForm({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className=" h-[90%] w-[70%] bg-white rounded-lg ml-6 flex gap-3 p-3">
      <div className=" w-[40%]">
        <Banner />
      </div>
      <div className=" w-[60%]">
        <AddDocuments setShow={setShow} />
      </div>
    </div>
  );
}
