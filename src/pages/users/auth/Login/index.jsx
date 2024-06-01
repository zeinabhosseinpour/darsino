import React from "react";
import classes from "./style.module.css";

// package
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
import InputAnt from "../../../../component/modal/InputAnt";

// style
import "./global.css";
import ButtonAnt from "../../../../component/modal/ButtonAnt";
import InputPassword from "../../../../component/modal/InputAnt/Password";
import Lock01 from "./../../../../assets/icons/lock01";
import Checkrectangle from "../../../../assets/icons/checkrectangle";
import LoginIcon from "../../../../assets/icons/loginIcon";

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
    <div className="flex flex-col justify-between sn:w-[725px] bg-primary-main sn:rounded-[15px]">
      <div className="sn:hidden flex justify-between py-12 px-8">
        <div>icon</div>
        <div>logo</div>
      </div>
      <div className="flex flex-col py-[58px] sn:justify-between">
        <div className={classes.parent1}>
          <span className={classes.login}>ورود</span>
          <div className={classes.childdiv1}></div>
        </div>
        {/* <div className={classes.parent}>
        <span style={{ textAlign: "center" }}>ورود</span>
        <div className={classes.childdiv}></div>
      </div> */}
        {/* <div className="flex  ">
        <span className="">ورود</span>
        <div className="   border-t-1 border-dash border-t-red-500  after:w-1 h-1 rounded-full after:content-['.']  "></div>
      </div>
      <div className="flex justify-between items-center">
        <span style={{ textAlign: "center" }}>نام</span>
        <div
          className=" relative w-[97%] h-[1px]  border-t-2 border-t-green-600  border-dashed mt-2  
          after: absolute
           after:top-[-3px]
           after:right-0
          after: w-[5px] after:h-[5px] after:bg-black after:rounded-full
         after:content-[''] "
        ></div>
      </div> */}
        {/* <div className={classes["dash-border"]}>
        <h3>ورود</h3>
      </div> */}
        {/* <div className=" relative flex gap-4">
        <h3 className=" bg-blue-500  text-4xl font-normal text-text-white  after:  absolute top-5 -left-3 h-0 w-full z-10 border-b-2 border-b-neutral-white  border-dashed   after:content-['.'">
          ثبت
        </h3>
      </div> */}

        {/* <div className="flex items-center bg-purple-700">
        <span className=" mr-3">ورود</span>
        <div className=" flex-1 h-1 border-t-1 border-dash border-t-red ml-3 content-[''] inline-block w-20">
          hh
        </div>
      </div> */}
        {/* <h3 className="  bg-green-500  text-4xl font-normal text-text-white  after:flex-1  border-b-2 border-b-neutral-white  border-dashed   after:content-['.'">
        ورود
      </h3>  */}
        {/* <div className="flex flex-col justify-between items-center gap-4 "> */}
        {/* <div className="flex gap-4"> */}

        {/* <div className="border-t-2 border-t-neutral-white  border-dashed "></div> */}
        {/* </div> */}
        <div className="flex flex-col justify-between  items-center   gap-4 py-4 px-8">
          <Form
            // style={{ display: "flex", gap: "10px" }}

            className="flex flex-col justify-start gap-8 "
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
              className="flex flex-col gap-1 "
              label="شماره تلفن"
              name="username"
              rules={[
                {
                  required: true,
                  message: "لطفا شماره تلفن را وارد نمایید",
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
                  message: "لطفارمز عبور را وارد نمایید",
                },
              ]}
            >
              {/* <Input.Password style={{ borderRadius: "16px" }} /> */}
              <InputPassword />
            </Form.Item>
            <Form.Item
              name="restore"
              // style={{ display: "flex", backgroundColor: "red" }}
              className="flex  items-center gap-2 "
            >
              <div className="flex justify-center items-center gap-2 ">
                <Form.Item
                  name="remember"

                  // wrapperCol={{
                  //   offset: 8,
                  //   span: 16,
                  // }}
                >
                  <Lock01 fill={"#FDFDFD"} />
                  <span>بازیابی رمزعبور</span>
                </Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  // wrapperCol={{
                  //   offset: 8,
                  //   span: 16,
                  // }}
                >
                  <Checkbox className="flexitems-center  gap-2">
                    من را بخاطر بسپار
                  </Checkbox>
                </Form.Item>
              </div>
            </Form.Item>

            <Form.Item
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
            >
              {/* <Button type="primary" htmlType="submit">
                  vorod
                </Button> */}
              <ButtonAnt>ورود</ButtonAnt>
            </Form.Item>
          </Form>

          {/* <div className=" flex justify-center items-center border-t-2 border-t-neutral-white  border-dashed "> */}
          <div className="flex flex-col gap-4 py-16 sn:gap-8">
            <div className={classes.childdiv1}></div>
            <div className="flex flex-col gap-[18px]">
              <span className=" text-base font-medium sn:text-2xl sn:font-semibold text-text-white">
                حساب کاربری ندارید؟
              </span>
              <Link to="/users/auth/signin">
                <div className="flex flex-row gap-4 rounded-[15px]">
                  <Button
                    className="flex items-center bg-secondary-main h-12 w-full px-6 py-1 text-xl font-normal border-0 text-gray-0 "
                    // style={{ border: "none" }}
                  >
                    <LoginIcon fill={"#FDFDFD"} width={"34"} height={"34"} />
                    ثبت نام
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
