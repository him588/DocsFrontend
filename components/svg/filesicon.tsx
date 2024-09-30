import { iconProp } from "@/types";
import React from "react";

function FilesIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M15.129 5.43l4.22.76a3.2 3.2 0 012.6 3.71l-1.67 9.45a3.19 3.19 0 01-3.7 2.6l-7.88-1.39a3.2 3.2 0 01-2.07-1.32"></path>
        <path d="M11.28 2.05a3.18 3.18 0 013.7 2.59l1.67 9.46a3.178 3.178 0 01-2.59 3.7l-7.88 1.39a3.2 3.2 0 01-3.71-2.59l-.31-1.78"></path>
        <path d="M2.17 14.82a11.1 11.1 0 019.11-12.77v0"></path>
        <path d="M2.09 14.36c-.51-4.17 4-1.58 6.09-4.6 2.09-3.02-1-7 3.11-7.71"></path>
      </g>
    </svg>
  );
}

export default FilesIcon;
