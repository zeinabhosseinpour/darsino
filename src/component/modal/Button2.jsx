import React, { Children } from "react";

const Button2 = (props) => {
  const { children } = props;
  return (
    <div>
      <button className="flex items-center rounded-[15px] p-2 sn:py-6 sn:px-8 sn:gap-[10px]  bg-secondary-main">
        <span className="text-sm sn:text-[28px] sn:leading-9 font-normal text-neutral-white ">
          {children}
        </span>
        <div>icon</div>
      </button>
    </div>
  );
};

export default Button2;
