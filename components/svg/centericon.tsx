import { iconProp } from "@/types";
import React from "react";

function CenterAlignIcon({ h, w, c }: iconProp) {
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
            d="M17 18H7m13-4H4m13-4H7m13-4H4"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default CenterAlignIcon;
