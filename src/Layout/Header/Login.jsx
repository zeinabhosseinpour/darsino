import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";

const Login = () => {
  return (
    <div>
      <div className="hidden sn:flex ">
        {" "}
        <Link to="/dashboard">
          <DivLink>نیوشا زرافشان </DivLink>
        </Link>
      </div>

      <div className="hidden sn:flex gap-2">
        {/* <div className=" border-[1px] border-tertiary-main rounded-[15px] py-[10px] px-6">
          <Link
            to="/users/auth/login "
            className="text-[22px] font-normal text-tertiary-main"
          >
            ورود
          </Link>
          </div> */}
        <Link to="/users/auth/login ">
          <DivLink
            textcolor={"text-tertiary-main"}
            bgcolor={"bg-white"}
            bordered={" border-[1px] border-tertiary-main"}
          >
            ورود
          </DivLink>
        </Link>

        {/* <div className=" bg-secondary-main rounded-[15px] py-[10px] px-6">
          <Link
            to="/users/auth/signin "
            className="text-[22px] font-normal  text-neutral-white"
          >
            ثبت نام
          </Link>
        </div> */}
        <Link to="/users/auth/signin ">
          <DivLink>ثبت نام</DivLink>
        </Link>
      </div>
      <div className="hidden sn:flex bg-secondary-main rounded-[15px] py-[10px] px-6">
        <Link
          to="/users/auth/profilesubmit "
          className="text-[22px] font-normal  text-neutral-white"
        >
          تکمیل پروفایل
        </Link>
      </div>
      <div className=" hidden sn:flex bg-secondary-main rounded-[15px] py-[10px] px-6">
        <Link
          to="/users/auth "
          className="text-[22px] font-normal  text-neutral-white"
        >
          احراز
        </Link>
      </div>
      <div className=" hidden sn:flex">
        <Link to="/quiz">
          <div>شروع آزمون</div>
        </Link>
      </div>
      <div className="sn:hidden flex gap-4 ">
        <div> icon login</div>
      </div>
    </div>
  );
};

export default Login;
