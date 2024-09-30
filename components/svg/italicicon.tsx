import { iconProp } from "@/types";
import React from "react";

function ItalicIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M10 3h10M4 21h10m1-18L9 21"
      ></path>
    </svg>
  );
}

export default ItalicIcon;
