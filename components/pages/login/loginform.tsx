import { ArrowIcon } from "@/components/svg";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4 justify-center font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-[300px] flex flex-col items-center justify-center gap-2"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.p
          className="font-semibold text-4xl text-left text-[#1e000e] tracking-tighter mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Login
        </motion.p>
        <div className="w-full">
          <p className="text-sm text-[#1e000e] font-semibold tracking-wide">
            Email Address
          </p>
          <motion.input
            type="text"
            placeholder="Enter your email"
            className="w-full h-[40px] rounded-md outline-none border-[1.4px] px-2 border-[#979da5]"
            whileFocus={{ borderColor: "#18182f", scale: 1.02 }}
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-[#1e000e] font-semibold tracking-wide">
            Password
          </p>
          <motion.input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full h-[40px] rounded-md outline-none border-[1.4px] px-2 border-[#979da5]"
            whileFocus={{ borderColor: "#18182f", scale: 1.02 }}
          />
        </div>
        <div className="w-full -mt-1 flex items-center justify-start gap-2">
          <input
            type="checkbox"
            name="showPassword"
            className="h-6 checked:bg-slate-950"
            id="showPassword"
            onChange={togglePasswordVisibility}
          />
          <p className="text-sm font-semibold">Show Password</p>
        </div>

        {/* Animated Sign Up Button */}
        <motion.button
          className="w-full h-[42px] rounded-md outline-none text-white font-semibold bg-[#18182f] flex gap-2 items-center justify-center"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          Login
          <motion.div className="mt-1" whileHover={{ x: 5 }}>
            <ArrowIcon h={20} w={20} c="white" />
          </motion.div>
        </motion.button>

        <div className="w-full flex items-center justify-center gap-4 text-sm text-[#a5aab1] mt-1">
          <div className="w-[80px] h-[1.1px] bg-opacity-50 bg-[#a5aab1]"></div>
          <p>or</p>
          <div className="w-[80px] h-[1.1px] bg-[#a5aab1] bg-opacity-50"></div>
        </div>

        {/* Animated Google Button */}
        <motion.button
          className="w-full h-[42px] border-[1.4px] border-solid rounded-md border-[#18182f] flex items-center justify-center gap-2 font-semibold text-[#18182f]"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Image
            src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
            alt="Google"
            width={22}
            height={22}
          />
          Continue with Google
        </motion.button>
        <motion.button
          className="w-full h-[42px] border-[1.4px] border-solid rounded-md border-[#18182f] flex items-center justify-center gap-2 font-semibold text-[#18182f]"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Image
            src="https://www.svgrepo.com/show/439171/github.svg"
            alt="Google"
            width={22}
            height={22}
          />
          Continue with Github
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default LoginForm;
