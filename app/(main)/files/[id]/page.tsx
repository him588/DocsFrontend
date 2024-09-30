// import Tiptap from "@/components/core/tiptap/tiptap";
import Image from "next/image";
import React from "react";
import grid from "@/components/images/image.png";
import Toolbar from "@/components/core/toolbar";
// import image from "@/components/images/image.png";

function Page() {
  return (
    <div className=" w-full h-full overflow-scroll scrollbar-hide">
      <div className=" w-[70%] h-full rounded-[20px] overflow-hidden bg-white relative">
        <Image
          src={grid}
          alt="Image not loading"
          className=" object-cover w-full h-full absolute top-0 "
        />
        <div className=" relative z-10 flex flex-col items-center pt-2  ">
          <div className="  sticky  bg-white h-[40px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Toolbar />
          </div>
        </div>
        {/* <Image src={image} alt="" className="w-full h-full" /> */}
      </div>
    </div>
  );
}

export default Page;
