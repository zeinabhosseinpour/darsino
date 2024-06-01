import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Calender from "../../assets/icons/calender";
import Clockcircle1 from "../../assets/icons/clockcircle1";

const Quizs = () => {
  return (
    <div className="flex flex-col py-8 px-4  sn:gap-16 bg-neutral-shop">
      <div className="flex flex-col gap-8 ">
        <div className=" flex gap-2 sn:gap-[10px] py-0 px-4 sn:py-[10px] sn:px-16">
          <span className=" text-2xl sn:text-4xl sn:leading-44x]  font-normal sn:font-bold text-secondary-main text-right">
            آزمون‌های تخصصی
          </span>
        </div>
        <div className="grid grid-cols-2 sn:grid-cols-3 gap-[9px] sn:gap-4">
          <div className=" border border-border-10 sn:border-0 shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] py-4 px-3  gap-3 sn:gap-5 sn:p-8 bg-neutral-white ">
            <div className=" rounded-10px] bg-primary-35"></div>
            <div className="flex flex-col gap-2x]">
              <span className=" text-base leading-8 font-medium text-right text-secondary-main">
                کلاس آنلاین
              </span>
              <span className="text-base leading-8 font-medium text-right text-black">
                آزمون شماره 1
              </span>
              <span className=" text-[10px] leading-5 font-normal text-right text-neutral-gray50">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است...
              </span>
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1">
                  <Calender width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ شروع: 02/08/25، ساعت 18
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clockcircle1 width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ پایان: 02/08/30، ساعت 18
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-center">
              <Link to="/testdetails">
                <DivLink>ثبت‌نام در آزمون</DivLink>
              </Link>
            </div>
          </div>
          <div className=" border border-border-10 sn:border-0 shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] py-4 px-3  gap-3 sn:gap-5 sn:p-8 bg-neutral-white ">
            <div className=" rounded-10px] bg-primary-35"></div>
            <div className="flex flex-col gap-2x]">
              <span className=" text-base leading-8 font-medium text-right text-secondary-main">
                کلاس آنلاین
              </span>
              <span className="text-base leading-8 font-medium text-right text-black">
                آزمون شماره 1
              </span>
              <span className=" text-[10px] leading-5 font-normal text-right text-neutral-gray50">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است...
              </span>
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1">
                  <Calender width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ شروع: 02/08/25، ساعت 18
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clockcircle1 width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ پایان: 02/08/30، ساعت 18
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-center">
              <Link to="/testdetails">
                <DivLink>ثبت‌نام در آزمون</DivLink>
              </Link>
            </div>
          </div>
          <div className=" border border-border-10 sn:border-0 shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] py-4 px-3  gap-3 sn:gap-5 sn:p-8 bg-neutral-white ">
            <div className=" rounded-10px] bg-primary-35"></div>
            <div className="flex flex-col gap-2x]">
              <span className=" text-base leading-8 font-medium text-right text-secondary-main">
                کلاس آنلاین
              </span>
              <span className="text-base leading-8 font-medium text-right text-black">
                آزمون شماره 1
              </span>
              <span className=" text-[10px] leading-5 font-normal text-right text-neutral-gray50">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است...
              </span>
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1">
                  <Calender width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ شروع: 02/08/25، ساعت 18
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clockcircle1 width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ پایان: 02/08/30، ساعت 18
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-center">
              <Link to="/testdetails">
                <DivLink>ثبت‌نام در آزمون</DivLink>
              </Link>
            </div>
          </div>
          <div className=" border border-border-10 sn:border-0 shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] py-4 px-3  gap-3 sn:gap-5 sn:p-8 bg-neutral-white ">
            <div className=" rounded-10px] bg-primary-35"></div>
            <div className="flex flex-col gap-2x]">
              <span className=" text-base leading-8 font-medium text-right text-secondary-main">
                کلاس آنلاین
              </span>
              <span className="text-base leading-8 font-medium text-right text-black">
                آزمون شماره 1
              </span>
              <span className=" text-[10px] leading-5 font-normal text-right text-neutral-gray50">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است...
              </span>
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1">
                  <Calender width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ شروع: 02/08/25، ساعت 18
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clockcircle1 width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ پایان: 02/08/30، ساعت 18
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-center">
              <Link to="/testdetails">
                <DivLink>ثبت‌نام در آزمون</DivLink>
              </Link>
            </div>
          </div>
          <div className=" border border-border-10 sn:border-0 shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] py-4 px-3  gap-3 sn:gap-5 sn:p-8 bg-neutral-white ">
            <div className=" rounded-10px] bg-primary-35"></div>
            <div className="flex flex-col gap-2x]">
              <span className=" text-base leading-8 font-medium text-right text-secondary-main">
                کلاس آنلاین
              </span>
              <span className="text-base leading-8 font-medium text-right text-black">
                آزمون شماره 1
              </span>
              <span className=" text-[10px] leading-5 font-normal text-right text-neutral-gray50">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است...
              </span>
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1">
                  <Calender width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ شروع: 02/08/25، ساعت 18
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clockcircle1 width={"10"} height={"10"} />
                  <span className=" text-[10px] leading-5 font-normal text-right text-forth-main">
                    تاریخ پایان: 02/08/30، ساعت 18
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-center">
              <Link to="/testdetails">
                <DivLink>ثبت‌نام در آزمون</DivLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizs;
