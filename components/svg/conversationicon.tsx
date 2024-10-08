import { iconProp } from "@/types";
import React from "react";

function Chaticon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke={c} strokeLinecap="round" strokeWidth="1.5">
        <path d="M12 16V8M8 14v-4M16 14v-4M17 3.338A9.954 9.954 0 0012 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"></path>
      </g>
    </svg>
  );
}

export default Chaticon;
