import React from "react";

// package
import { Button } from "antd";

const ButtonAnt = (props) => {
  const { children } = props;
  return (
    <Button
      style={{ border: "none", textAlign: "center" }}
      type="primary"
      htmlType="submit"
      className=" bg-secondary-main h-12 w-full px-6 py-1  text-[22px]  font-normal text-gray-0 text-center "
    >
      {children}
    </Button>
  );
};

export default ButtonAnt;
