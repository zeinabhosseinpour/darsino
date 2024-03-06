import React from "react";
import classes from "./style.module.css";

// package
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";

const Login = () => {
  const validateMobileNumber = (rule, value, callback) => {
    const mobileNumberPattern = /^(\+98|0)?9\d{9}$/;
    // if(/^\d+$/.test(input))
    // ^\d{11$/.test(mobile)}  // نامعتبره
    if (value && !mobileNumberPattern.test(value)) {
      callback("شماره موبایل نادرست وارد شده است. ");
    } else {
      callback();
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="">
      {/* <div className={classes["dash-border"]}>
        <h3>ورود</h3>
      </div> */}
      {/* <div className=" relative ">
        <h3
          className=" bg-red-500  text-4xl font-normal text-text-white  after:  absolute top-5 -left-3 
        w-full z-10 border-b-2 border-b-neutral-white  border-dashed   after:content-['.']"
        >
          ورود
        </h3>
      </div> */}

      <div className={classes.parent}>
        <span style={{ textAlign: "center" }}>ورود</span>
        <div className={classes.childdiv}></div>
      </div>
      <div className="flex  ">
        <span className="">ورود</span>
        <div className="   border-t-1 border-dash border-t-red-500  after:w-1 h-1 rounded-full after:content-['.']  "></div>
      </div>

      {/* <h3
        className=" text-4xl font-normal text-red  after:flex-1 border-b-2 border-b-red
       border-dashed   after:content-['.']"
      >
        ورود
      </h3> */}
    </div>
  );
};

export default Login;
