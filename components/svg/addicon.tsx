import { iconProp } from "@/types";
import React from "react";

function AddIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <g
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            data-name="add"
          >
            <path d="M12 19L12 5"></path>
            <path d="M5 12L19 12"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default AddIcon;
