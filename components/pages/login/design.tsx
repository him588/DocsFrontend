import React from "react";
import { motion } from "framer-motion";

function Design({
  login,
  setlogin,
}: {
  login: boolean;
  setlogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      className="relative h-[80%] w-[70%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="px-3 py-2 bg-white max-w-[150px] text-white font-bold text-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        THE DOCS <span className="block font-light">EDITOR</span>
      </motion.div>

      <motion.div
        className="mt-8 h-[2px] w-[80px] bg-[#a35ef9] rounded-lg"
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      ></motion.div>

      <div className="mt-8">
        <motion.p
          className="text-lg font-semibold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          We are
        </motion.p>
        <motion.p
          className="text-4xl font-semibold text-[#18182f] mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Inviting you to join us.
        </motion.p>
        <motion.p
          className="mt-3 text-lg text-white font-thin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          The pen is mightier than the sword,{" "}
          <span className="block">but coding turns ideas into reality.</span>
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="text-lg text-white">
          {login ? "Don't have an account?" : "Already have an account?"}{" "}
          <motion.span
            className="cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setlogin((prev) => !prev)}
            aria-label={login ? "Switch to Signup" : "Switch to Login"}
            transition={{ type: "spring", stiffness: 300 }} // Smooth transition effect
          >
            {login ? "Signup" : "Login"}
          </motion.span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Design;
