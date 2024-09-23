"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import fiv from "../../components/images/image.png";
import { Design, Form, LoginForm } from "@/components/pages/login";

const Page = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      {/* Container */}
      <motion.div
        className="h-screen w-full  bg-white shadow-2xl rounded-lg flex overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.div className="w-[55%] h-full relative overflow-hidden">
          <Image
            src={fiv}
            alt="Background image of a woman"
            className="h-full w-full object-cover"
          />

          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Design login={login} setlogin={setLogin} />
          </motion.div>
        </motion.div>

        <div className="w-[45%] h-full py-16 px-12 bg-white flex flex-col justify-center relative">
          <motion.div
            className="bg-white p-8 rounded-lg "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {login ? <LoginForm /> : <Form />}
            {/* <Form /> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
