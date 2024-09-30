"use client";
import React from "react";
import Dropdown from "../textpicker";
import ColorPicker from "../colorpicker";
import {
  BoldIcon,
  CodeIcon,
  CommentIcon,
  ItalicIcon,
  LinkIcon,
  OrderIcon,
  OverLineIcon,
  UnderlineIcon,
  UnorderlistIcon,
} from "@/components/svg";
import TextAlign from "../textalign";

const Toolbar = () => {
  return (
    <div className=" w-full h-full p-[2px] flex items-center gap-[2px]">
      <Dropdown />
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <ColorPicker />
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <div className=" h-full flex gap-1">
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <BoldIcon h={25} w={25} c="#7b7e89" />
        </div>
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <ItalicIcon h={24} w={24} c="#7b7e89" />
        </div>
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <UnderlineIcon h={25} w={25} c="#7b7e89" />
        </div>
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <OverLineIcon h={25} w={25} c="#7b7e89" />
        </div>
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <CodeIcon h={25} w={25} c="#7b7e89" />
        </div>
      </div>
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <div className=" h-full flex gap-1">
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <UnorderlistIcon h={25} w={25} c="#7b7e89" />
        </div>
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <OrderIcon h={30} w={25} c="#7b7e89" />
        </div>
        <TextAlign />
      </div>
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <div className=" h-full flex gap-1">
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <LinkIcon h={20} w={25} c="#7b7e89" />
        </div>
        <div className=" h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm">
          <CommentIcon h={35} w={25} c="#7b7e89" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
