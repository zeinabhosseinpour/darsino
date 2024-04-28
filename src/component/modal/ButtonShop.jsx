import React from "react";

const ButtonShop = (props) => {
  const { children } = props;
  return (
    <div className="flex  p-2 sn:py-6 sn:px-8 gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
      <span className=" text-sm  sn:text-[28px] sn:leading-9 font-normal text-tertiary-main">
        {children}
      </span>
    </div>
  );
};

export default ButtonShop;
