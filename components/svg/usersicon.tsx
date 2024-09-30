import { iconProp } from "@/types";
import React from "react";

function UsersIcon({ h, w, c }: iconProp) {
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
        strokeWidth="1.5"
        d="M20.5 21a2.5 2.5 0 002.5-2.5c0-2.327-1.952-3.301-4-3.708M15 11a4 4 0 000-8M3.5 21h11a2.5 2.5 0 002.5-2.5c0-4.08-6-4-8-4s-8-.08-8 4A2.5 2.5 0 003.5 21zM13 7a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  );
}

export default UsersIcon;
