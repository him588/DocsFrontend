"use client";
import React from "react";
import Dropdown from "../textpicker";
import ColorPicker from "../colorpicker";
// import Underline from "@tiptap/extension-underline"
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
import { useCurrentEditor } from "@tiptap/react";

const Toolbar = () => {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }
  return (
    <div className=" w-full h-[40px] bg-white sticky  z-20 top-3 p-[2px] flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md  gap-[2px]">
      <Dropdown editor={editor} />
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <ColorPicker editor={editor} />
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <div className=" h-full flex gap-1">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("bold") ? "is-active" : ""
          }`}
        >
          <BoldIcon h={25} w={25} c="#7b7e89" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("italic") ? "is-active" : ""
          }`}
        >
          <ItalicIcon h={24} w={24} c="#7b7e89" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("underline") ? "is-active" : ""
          }`}
        >
          <UnderlineIcon h={24} w={24} c="#7b7e89" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("strike") ? "is-active" : ""
          }`}
        >
          <OverLineIcon h={25} w={25} c="#7b7e89" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("codeBlock") ? "is-active" : ""
          }`}
        >
          <CodeIcon h={25} w={25} c="#7b7e89" />
        </button>
      </div>
      <div className=" h-[65%] w-[1.2px] bg-[#e8e8e8]"></div>
      <div className=" h-full flex gap-1">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("bulletList") ? "is-active" : ""
          }`}
        >
          <UnorderlistIcon h={25} w={25} c="#7b7e89" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          className={`h-full w-[35px] flex items-center cursor-pointer p-1 hover:bg-[#f2f2f3] rounded-sm ${
            editor.isActive("orderedList") ? "is-active" : ""
          }`}
        >
          <OrderIcon h={30} w={25} c="#7b7e89" />
        </button>
        <TextAlign editor={editor} />
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
