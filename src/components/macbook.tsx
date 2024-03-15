import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Prioritizing mental health isn't just self-care, it's self-preservation. <br /> 
            Your well-being matters as much as your physical health. 
            <br /> 
            Let's break the stigma and make mental health a priority."
          </span>
        }
        src={`https://astrotalk.com/astrology-blog/wp-content/uploads/2023/07/achieve-inner-peace.png`}
        showGradient={false}
      />
    </div>
  );
}
