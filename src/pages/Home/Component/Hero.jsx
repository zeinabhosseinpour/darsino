import React from "react";

// style
import classes from "./style.module.css";
import Button from "../../../component/modal/Button";
import { Link } from "react-router-dom";
import DivLink from "../../../component/modal/DivLink";
import { twMerge } from "tailwind-merge";

const Hero = () => {
  return (
    <div className="flex flex-col  sn:gap-4  ">
      <div className="flex flex-col p-4 gap-[18px] sn:flex-row-reverse  sn:justify-between  sn:px-16 sn:py-8  bg-blue-500">
        <div className=" relative bg-green-500 w-[607px] h-[459px]">
          <div className=" absolute w-[173px] h-[189px] top-[121px] left-[66px] rounded-[15px] bg-primary-85 ">
            عکس پسر
          </div>
          <div className=" absolute  w-[173px] h-[170px] top-80 left-16 rounded-[15px] bg-primary-85 ">
            عکس کتاب
          </div>
          <div className=" absolute w-[173px] h-[152px] top-[190px] left-[248px] rounded-[15px] bg-primary-85 ">
            عکس جام
          </div>
          <div className=" absolute w-[173px] h-[136px] top-[354px] left-[248px] rounded-[15px] bg-primary-85">
            عکس کلاه
          </div>
          <div className=" absolute w-[232px] h-[181px]  top-[310px] left-[428px] rounded-[15px] bg-primary-85 ">
            عکس دختر
          </div>
          <div className=" absolute w-[451.5px] h-[152px] top-[72.5px] left-[212px] rounded-[15px] bg-primary-85 ">
            خط
          </div>
        </div>
        <div className="flex flex-col gap-4 sn:gap-8 sn:py-8 bg-pink-300 sn:w-[613px] sn:h-[364px]">
          <div className="flex flex-col gap-2  sn:gap-8">
            <span className=" text-2xl leading-[56px] sn:text-5xl sn:leading-[56px] font-medium text-neutral-black text-right">
              هر آنچه که برای قبولی نیاز دارید!
            </span>
            <span className=" text-xs leading-10 sn:text-[22px] font-normal text-neutral-gray25 text-right">
              ارائه دهنده سرویس نمونه سوال و پروژه کتاب های درسی، پروژه های
              اختصاصی پایانی، خدمات آموزشی نظیر ویدیو، جزوه، کلاس درسی، رفع
              اشکال و ...
            </span>
          </div>

          <div className="flex justify-end items-center  gap-2">
            <Link to="/tests">
              <DivLink
                textcolor={"text-tertiary-main"}
                bgcolor={"bg-white"}
                bordered={" border-[1px] border-tertiary-main"}
              >
                مشاهده نمونه آزمون‌ها
              </DivLink>
            </Link>
            <Link to="/shop">
              <DivLink>ورود به فروشگاه</DivLink>
            </Link>
          </div>
        </div>
      </div>
      <div className="  hidden sn:flex sn:flex-col gap-4 py-8 ">
        {/* <div className="flex justify-between"></div> */}
        <div className={classes.parent1}>
          <div className={classes.childdiv1}></div>
          <div className="flex gap-4">
            <DivLink
              color="blue"
              bgcolor={"bg-primary-85"}
              // bgcolor={twMerge("bg-pink-500 bg-blue")}
              textcolor={"text-neutral-white"}
              bordered={
                " border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A]"
              }
            >
              برگذاری آزمون تخصصی، جامع و جمع بندی
            </DivLink>

            <DivLink
              bgcolor={"bg-primary-85"}
              textcolor={"text-neutral-white"}
              bordered={
                " border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A]"
              }
            >
              ارائه جزوه و درسنامه
            </DivLink>

            <DivLink
              bgcolor={"bg-primary-85"}
              textcolor={"text-neutral-white"}
              bordered={
                " border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A]"
              }
            >
              برگزاری کلاس‌های آموزشی
            </DivLink>
          </div>
          {/* <span className={classes.login}>
            برگذاری آزمون تخصصی، جامع و جمع بندی
          </span>
          <span className={classes.login}>ارائه جزوه و درسنامه</span>
          <span className={classes.login}>برگزاری کلاس‌های آموزشی</span> */}
          <div className={classes.childdiv2}></div>
        </div>
        <div className={classes.parent1}>
          <div className={classes.childdiv3}></div>
          <div className="flex gap-4">
            <DivLink
              bgcolor={"bg-primary-85"}
              textcolor={"text-neutral-white"}
              bordered={
                " border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A]"
              }
            >
              دوره‌های آموزشی ویدئویی
            </DivLink>

            <DivLink
              bgcolor={"bg-primary-85"}
              textcolor={"text-neutral-white"}
              bordered={
                " border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A]"
              }
            >
              نمونه سوال و پروژه های دروس اختصاصی
            </DivLink>

            <DivLink
              bgcolor={"bg-primary-85"}
              textcolor={"text-neutral-white"}
              bordered={
                " border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A]"
              }
            >
              مشاوره عمومی و خصوصی
            </DivLink>
          </div>
          {/* <span className={classes.login}>دوره‌های آموزشی ویدئویی</span>
          <span className={classes.login}>
            نمونه سوال و پروژه های دروس اختصاصی
          </span>
          <span className={classes.login}>مشاوره عمومی و خصوصی </span> */}
          <div className={classes.childdiv4}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
