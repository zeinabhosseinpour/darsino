import React from "react";

import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import Header from "../../../../Layout/Header";
import ButtonAnt from "../../../../component/modal/ButtonAnt";
import DivLink from "../../../../component/modal/DivLink";
import Repeat from "../../../../assets/icons/repeat";
import Send from "../../../../assets/icons/send";
import LoginIcon from "../../../../assets/icons/loginIcon";

const Authent = () => {
  return (
    <div className="flex flex-col items-center  gap-[10px] bg-primary-main sn:bg-neutral-gray sn:rounded-[15px]">
      <div className="sn:hidden flex justify-between py-12 px-8">
        <div>icon</div>
        <div>logo</div>
      </div>
      <div className="flex flex-col items-center gap-[21px] sn:justify-between p-8">
        <div className={classes.parent1}>
          <span className={classes.register}>ثبت‌ نام</span>
          <div className={classes.childdiv2}></div>
          <span className={classes.register}>تکمیل پروفایل</span>
          <div className={classes.childdiv2}></div>
          <span className={classes.register2}>احراز </span>
        </div>
        <div className="flex flex-col items-center sn:items-start gap-16 sn:gap-8">
          <div className="flex flex-col items-center sn:items-start  gap-8">
            <div className="flex flex-col  items-center gap-8">
              {" "}
              <div className="flex gap-[10px]">
                <span className=" text-base sn:text-[22px] sn:leading-10 font-medium sn:font-normal text-white text-right">
                  کد به شماره 7848**** **** ارسال شد.
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-[10px]">
                  <span className=" text-base  sn:text-[22px] sn:leading-10 font-medium sn:font-normal  text-white text-center">
                    کد را وارد کنید.
                  </span>
                </div>
                <div className="flex gap-2 sn:gap-1">
                  <Input
                    style={{
                      backgroundColor: "#D9D9D9B2",
                      borderRadius: "15px",
                      width: "52px",
                      height: "52px",
                    }}
                  />
                  <Input
                    style={{
                      backgroundColor: "#D9D9D9B2",
                      borderRadius: "15px",
                      width: "52px",
                      height: "52px",
                    }}
                  />
                  <Input
                    style={{
                      backgroundColor: "#D9D9D9B2",
                      borderRadius: "15px",
                      width: "52px",
                      height: "52px",
                    }}
                  />
                  <Input
                    style={{
                      backgroundColor: "#D9D9D9B2",
                      borderRadius: "15px",
                      width: "52px",
                      height: "52px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between sn:items-start sn:text-right  sn:gap-2  sn:flex-col-reverse">
              <div className="flex items-center gap-2">
                <Send fill={"#FDFDFD"} />
                <span className=" text-base font-medium text-white text-right">
                  تغییر شماره تلفن
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Repeat fill={"#FDFDFD"} />
                <span className=" text-base font-medium text-white text-right">
                  ارسال کد مجدد
                </span>
              </div>
            </div>
          </div>
          {/* <Link to="/submit">
            <div className="flex flex-row gap-4 rounded-[15px]">
              <Button className=" bg-secondary-main h-12 w-full px-6 py-1 text-xl font-normal text-gray-0 ">
                اتمام ثبت نام و ورود
              </Button>
            </div>
          </Link> */}
          <div className=" w-full">
            <ButtonAnt>اتمام ثبت نام و ورود</ButtonAnt>
          </div>
        </div>
      </div>

      <div className="sn:hidden flex flex-col py-8 px-0 gap-4">
        <div className={classes.childdiv1}></div>
        <div className="flex flex-col items-stretch gap-5  ">
          <span className="text-2xl font-semibold text-text-white">
            حساب کاربری دارید؟
          </span>
          {/* <Link to="/submit">
            <div className="flex flex-row gap-4 rounded-[15px]">
              <Button className=" bg-secondary-main h-12 w-full px-6 py-1 text-xl font-normal text-gray-0 ">
                ورود
              </Button>
            </div>
          </Link> */}

          <Link to="/users/auth/login">
            <div className="flex flex-row gap-4 rounded-[15px]">
              <Button className=" bg-secondary-main h-12 w-full px-6 py-1 text-xl font-normal text-gray-0 ">
                <LoginIcon fill={"#FDFDFD"} width={"34"} height={"34"} />
                ورود
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Authent;
