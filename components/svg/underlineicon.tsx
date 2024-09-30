import { iconProp } from "@/types";
import React from "react";

function UnderlineIcon({ h, w, c }: iconProp) {
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
        d="M4 21h16M18 4v7a6 6 0 01-12 0V4M4 3h4m8 0h4"
      ></path>
    </svg>
  );
}

export default UnderlineIcon;
