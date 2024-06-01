import React from "react";

import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
import InputAnt from "../../../../component/modal/InputAnt";

// style
import ButtonAnt from "../../../../component/modal/ButtonAnt";
import InputPassword from "../../../../component/modal/InputAnt/Password";
import "./global.css";
import classes from "./style.module.css";
import In from "../../../../assets/icons/in";
import Lock01 from "../../../../assets/icons/lock01";
const SignIn = () => {
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
    <div className="flex bg-primary-main">
      <div className="flex flex-col  gap-4">
        <div className={classes.parent1}>
          <span className={classes.register}>ثبت‌ نام</span>
          <div className={classes.childdiv1}></div>
          <span className={classes.register2}>تکمیل پروفایل</span>
          <div className={classes.childdiv1}></div>
          <span className={classes.register2}>احراز </span>
        </div>
        <div>
          <Form
            style={{ display: "flex", gap: "10px" }}
            className="flex flex-col justify-start gap-16 bg-green-500"
            name="loginForm"
            // labelCol={{
            //   span: 8,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}
            // style={{
            //   maxWidth: 600,
            // }}
            // initialValues={{
            //   remember: true,
            // }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // autoComplete="off"
          >
            <Form.Item
              className="flex flex-col gap-1"
              label="شماره تلفن"
              name="username"
              rules={[
                {
                  required: true,
                  message: "وارد کردن شماره تلفن الزامی است.",
                },
              ]}
            >
              <InputAnt />
              {/* <Input /> */}
            </Form.Item>

            <Form.Item
              className="flex flex-col gap-1"
              label="رمز عبور"
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    "رمز عبور باید شامل حروف بزرگ، کوچک اعداد و سمبول ها باشد.",
                },
              ]}
              hasFeedback
            >
              {/* <Input.Password style={{ borderRadius: "16px" }} /> */}
              <InputPassword />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="تکرار رمز عبور"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              {/* <Input.Password /> */}
              <InputPassword />
            </Form.Item>

            <Form.Item
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
            >
              <Link to="/users/auth/profilesubmit">
                <Button type="primary" htmlType="submit"></Button>
                <ButtonAnt>ثبت نام</ButtonAnt>
              </Link>
            </Form.Item>
          </Form>
        </div>

        <div className=" flex justify-center items-center border-t-2 border-t-neutral-white  border-dashed ">
          <div className="flex flex-col items-stretch gap-5  ">
            <span className="text-2xl font-semibold text-text-white">
              حساب کاربری دارید؟
            </span>
            <Link to="/users/auth/login">
              <div className="flex flex-row gap-4 rounded-[15px]">
                <Button className=" bg-secondary-main h-12 w-full px-6 py-1 text-xl font-normal text-gray-0 ">
                  <In stroke={"#FDFDFD"} width={"34"} height={"34"} />
                  ورود
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
