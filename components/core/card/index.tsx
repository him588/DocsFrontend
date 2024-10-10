import React from "react";
// import Image from "next/image";

function Card() {
  return (
    <div className=" h-full w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
      <div className=" h-[60%] bg-[#f5f5f5] w-full relative ">
        <div className=" h-[80%] w-[80%] absolute left-[10%] bottom-0  z-10  ">
          <div className=" w-full h-[140%] rounded-xl bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"></div>
        </div>
      </div>
      <div className=" h-[40%] relative z-20 bg-white border-t-[1px] border-solid border-gray-400 border-opacity-40 py-1 px-2 ">
        <p>Himanshu</p>
      </div>
    </div>
  );
}

export default Card;
