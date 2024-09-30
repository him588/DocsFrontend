import { iconProp } from "@/types";
import React from "react";

function HomeIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path fill={c} d="M1 6v9h5v-4a2 2 0 114 0v4h5V6L8 0 1 6z"></path>
    </svg>
  );
}

export default HomeIcon;
