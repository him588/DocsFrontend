import { iconProp } from "@/types";
import React from "react";

function UnorderlistIcon({ h, w, c }: iconProp) {
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
        d="M8 6h13M8 12h13M8 18h13M3 6.5h1v-1H3v1zm0 6h1v-1H3v1zm0 6h1v-1H3v1z"
      ></path>
    </svg>
  );
}

export default UnorderlistIcon;
