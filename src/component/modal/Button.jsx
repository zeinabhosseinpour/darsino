import React from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <div>
      <button className="  rounded-[15px] py-[6px] px-2 sn:py-[10px] sn:px-6 text-sm sn:text-[22px] font-normal text-neutral-white bg-secondary-main">
        {children}
      </button>
    </div>
  );
};

export default Button;
