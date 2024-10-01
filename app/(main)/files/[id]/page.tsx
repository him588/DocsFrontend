import Image from "next/image";
import React from "react";
import grid from "@/components/images/image.png";
import Editor from "@/components/utils/tiptap/editor";

function Page() {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hide ">
      <div className="w-[70%] min-h-screen rounded-[20px] bg-white  relative">
        <Image
          src={grid}
          alt="Image not loading"
          className="object-cover w-full h-full absolute top-0"
        />
        <div className="relative h-full z-10 flex flex-col items-center gap-3 p-2">
          <div className="w-[90%] min-h-[500px]  outline-none  rounded-xl bg-opacity-80 p-2">
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
