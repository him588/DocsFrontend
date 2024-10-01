import { iconProp } from "@/types";
import React from "react";

function NotIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      viewBox="0 0 16 16"
    >
      <g>
        <path
          d="M-14 0a8.009 8.009 0 00-8 8 8.009 8.009 0 008 8 8.009 8.009 0 008-8 8.009 8.009 0 00-8-8zm7 8a6.963 6.963 0 01-1.716 4.577l-9.861-9.861A6.963 6.963 0 01-14 1a7.008 7.008 0 017 7zm-14 0a6.963 6.963 0 011.716-4.577l9.861 9.861A6.963 6.963 0 01-14 15a7.008 7.008 0 01-7-7z"
          data-name="Path 63"
          transform="translate(22)"
        ></path>
      </g>
    </svg>
  );
}

export default NotIcon;
