import React from "react";
import { twMerge } from "tailwind-merge";
const DivLink = (props) => {
  const { children } = props;
  const tail =
    "rounded-[15px] py-[6px] px-2 sn:py-[10px] sn:px-6 text-[10px] sn:text-[18px] font-normal items-center ";
  // const bordered = " border-[1px] border-tertiary-main";
  const bgcolortext = " bg-secondary-main text-neutral-white";
  // const gap="gap-1 sn:gap-[10px]";

  return (
    <div
      color="green"
      // {...props}
      className={twMerge` ${tail} ${bgcolortext} ${props.bgcolor} ${props.textcolor}  ${props.bordered} ${props.flex}  `}
    >
      {children}
    </div>
  );
};

export default DivLink;
