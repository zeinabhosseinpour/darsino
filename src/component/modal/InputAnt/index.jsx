import React from "react";

// package
import { Button, Checkbox, Form, Input } from "antd";

// style
import "./global.css";

const InputAnt = () => {
  return (
    <div>
      <Input
        placeholder="نیوشا زرافشان"
        style={{
          backgroundColor: "#D9D9D9B2",
          borderRadius: "15px",
          width: "450px",
          height: "50px",
        }}
      />
    </div>
  );
};

export default InputAnt;
