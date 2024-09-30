import { iconProp } from "@/types";
import React from "react";

function LeftalignIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <path
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 18h10M4 14h16M4 10h10M4 6h16"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default LeftalignIcon;
