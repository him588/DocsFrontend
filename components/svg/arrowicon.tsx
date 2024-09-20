import { iconProp } from "@/types";
import React from "react";

function ArrowIcon({ h, w, c }: iconProp) {
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
        strokeWidth="2"
        d="M6 12h12m0 0l-5-5m5 5l-5 5"
      ></path>
    </svg>
  );
}

export default ArrowIcon;
