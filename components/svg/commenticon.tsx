import { iconProp } from "@/types";
import React from "react";

function CommentIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 -0.5 25 25"
    >
      <g
        fillRule="evenodd"
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        clipRule="evenodd"
      >
        <path
          strokeWidth="1.5"
          d="M9.163 5h6.675A3.69 3.69 0 0119.5 8.717v4.513a3.69 3.69 0 01-3.663 3.717H9.163L5.5 19V8.717A3.69 3.69 0 019.163 5z"
        ></path>
        <path d="M7.5 11a1 1 0 112 0 1 1 0 01-2 0zM11.5 11a1 1 0 112 0 1 1 0 01-2 0zM15.5 11a1 1 0 112 0 1 1 0 01-2 0z"></path>
      </g>
    </svg>
  );
}

export default CommentIcon;
