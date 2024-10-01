"use client";
import React from "react";
import Image from "next/image";
import bg from "../../components/images/image3.png";
import graph from "../../components/images/graph.svg";
import grid from "../../components/images/grid.svg";
import bargraph from "../../components/images/bargraph.svg";
import { Logo } from "@/components/core/logo";
import { motion } from "framer-motion";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
function Page() {
  const router = useRouter();
  dotenv.config();
  console.log(process.env.URL);
  const googleResponse = async (authResult: CodeResponse) => {
    try {
      if (authResult.code) {
        const response = await fetch(
          `${process.env.URL}/auth/google?code=${authResult.code}`,
          {
            method: "POST", // Specify method if needed
            credentials: "include", // Important to send and receive cookies
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Google auth failed with status ${response.status}`);
        }

        const data = await response.json(); // Handle response data
        if (data.success) {
          router.push("/dashboard");
        }
        console.log("Google Auth Response:", data);
      } else {
        console.log("Google Auth result does not contain a code:", authResult);
      }
    } catch (error) {
      console.log("Error during Google authentication:", error);
    }
  };

  // Separate success and error handlers for better clarity
  const googleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: (error) => console.log("Google login error:", error),
    flow: "auth-code",
    // ux_mode: "redirect",
    // redirect_uri: "http://localhost:3000/sighup",
  });

  return (
    <div className=" w-full h-screen bg-white flex p-3  ">
      <div className=" w-[50%] h-full px-10">
        <div>
          <Logo />
        </div>
        <div className=" mt-24">
          <p className=" text-4xl leading-[120%]    ">
            Login account and{" "}
            <span className=" block"> start effortlessly.</span>
          </p>
          <p className=" text-sm  mt-2 text-[#727272]">
            Sighup to start your 30 days free trail
          </p>
          <div className=" w-full  py-4">
            <motion.button
              className="w-full h-[40px] border-[1.2px] border-solid rounded-md border-black/80 flex items-center justify-center gap-2 font-semibold text-[#18182f]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={googleLogin}
            >
              <Image
                src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                alt="Google"
                width={22}
                height={22}
              />
              Continue with Google
            </motion.button>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-full relative rounded-xl   ">
        <Image
          src={bg}
          alt=""
          priority
          className=" h-full w-full absolute top-0 object-cover rounded-xl"
        />
        <div className=" absolute top-0 w-full h-full z-20"></div>
        <div className=" w-full h-full absolute top-0 z-10 overflow-scroll scrollbar-hide">
          <motion.div
            animate={{ translateY: "-50%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className=" flex flex-col items-center gap-4 py-2 "
          >
            <motion.div
              // ref={ref1}
              className=" h-[290px] w-[260px] bg-white/90 rounded-xl  p-2"
              initial={{ opacity: 1 }}
              // animate={{ opacity: inView1 ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              <p className=" text-xl">Growth</p>
              <p className=" text-3xl font-semibold">
                + 21.35%{" "}
                <span className=" text-base font-normal">last month</span>
              </p>
              <p className=" text-sm ">
                The signifant increase in growth shows highlights the
                effectivness of our recent strategies and content approach .
              </p>
              <div className="  w-full h-[120px] relative mt-1">
                <Image
                  src={grid}
                  alt=""
                  className=" w-full h-full absolute bottom-0 object-cover"
                />
                <Image
                  src={graph}
                  alt=""
                  className=" w-full object-cover absolute bottom-0"
                />
              </div>
            </motion.div>
            <motion.div
              // ref={ref2}
              className=" h-[290px] w-[260px] bg-white/90 rounded-xl p-2"
              initial={{ opacity: 1 }}
              // animate={{ opacity: inView2 ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              <p className=" text-xl">Productivity</p>
              <p className=" text-3xl font-semibold">
                + 15.95%{" "}
                <span className=" text-base font-normal">Daily basis</span>
              </p>
              <p className=" text-sm ">
                The substantial boost in productivity underscores the impact of
                our streamlined processes and enhanced focus on efficient
                workflows.
              </p>
              <div className="  w-full h-[120px] relative mt-1">
                <Image
                  src={grid}
                  alt=""
                  className=" w-full h-full absolute bottom-0 object-cover"
                />
                <Image
                  src={bargraph}
                  alt=""
                  className="  h-full object-contain absolute bottom-0"
                />
              </div>
            </motion.div>
            <motion.div
              // ref={ref3}
              className=" h-[290px] w-[260px] bg-white/90 rounded-xl p-2"
              initial={{ opacity: 1 }}
              // animate={{ opacity: inView3 ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              <p className=" text-3xl font-bold bg-gradient-to-r from-[#6245c3] via-[#45bef2] to-[#b841eb] inline-block text-transparent bg-clip-text">
                Tactoas is surprisingliy handle all your text docs editing
                related stuff.
              </p>
              <div className=" flex gap-3 mt-1">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGUlMjBtZW58ZW58MHx8MHx8fDA%3D"
                  }
                  height={50}
                  width={45}
                  className=" rounded-full"
                  alt=""
                />
                <div className=" flex flex-col -gap-2">
                  <p className=" font-semibold">Himanshu Kashyap</p>
                  <p className=" text-sm text-gray-400">Junior dev</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              // ref={ref4}
              className=" h-[290px] w-[260px] bg-white/90 rounded-xl p-2"
              initial={{ opacity: 1 }}
              // animate={{ opacity: inView4 ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              <p className=" text-xl">Customers</p>
              <p className=" text-3xl font-semibold">
                + 200 <span className=" text-base font-normal">Every week</span>
              </p>
              <p className=" text-sm ">
                The steady increase in customers each week reflects the growing
                trust in our brand and the effectiveness of our outreach
                efforts.
              </p>
              <div className="  w-full h-[120px] relative mt-1">
                <Image
                  src={grid}
                  alt=""
                  className=" w-full h-full absolute bottom-0 object-cover"
                />
                <Image
                  src={bargraph}
                  alt=""
                  className="  h-full object-contain absolute bottom-0"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;
