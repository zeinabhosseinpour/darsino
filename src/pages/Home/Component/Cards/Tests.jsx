import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../../../component/modal/DivLink";
import Arrowleft from "../../../../assets/icons/arrowleft";

const Tests = () => {
  return (
    <div className="flex flex-col gap-8 py-8 px-0 sn:gap-9 sn:p-16 sn:bg-neutral-white  sn:border-[0.2px] sn:border-border-25 ">
      <div className="flex flex-col sn:flex-row sn:justify-between sn:items-center gap-2 px-4 sn:px-0 sn:gap-[45px]">
        <div className="flex flex-col text-right sn:gap-[18px]">
          <span className=" text-[22px] sn:text-[28px] font-normal text-secondary-main">
            برگذاری آزمون های تخصصی، جامع و جمع بندی
          </span>
          <span className=" text-base font-medium sn:text-4xl sn:font-normal">
            تونستی بهترین خودت باشی یا نه؟
          </span>
        </div>
        <div className="flex justify-end gap-[10px]">
          <Link to="/tests ">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              مشاهده بیشتر
              <Arrowleft stroke={"#FDFDFD"} width={"36"} height={"36"} />
            </DivLink>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 sn:px-0 sn:grid-cols-4  ">
        <div className="flex flex-col gap-3 sn:gap-6 py-4 px-3 sn:p-8 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] rounded-[15px] bg-neutral-white">
          <div className="rounded-[10px]">ax</div>
          <div className=" flex flex-col sn:gap-3 text-right">
            <span className=" text-base sn:text-2xl font-medium sn:font-normal text-secondary-main">
              کارنامه آزمون
            </span>
            <span className=" text-base font-medium sn:text-[28px] sn:font-normal">
              دانشپذیر الف
            </span>
            <span className=" text-[10px] font-normal sn:text-sm  text-neutral-gray50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sn:gap-6 py-4 px-3 sn:p-8 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] rounded-[15px] bg-neutral-white">
          <div className="rounded-[10px]">ax</div>
          <div className=" flex flex-col sn:gap-3 text-right">
            <span className=" text-base sn:text-2xl font-medium sn:font-normal text-secondary-main">
              کارنامه آزمون
            </span>
            <span className=" text-base font-medium sn:text-[28px] sn:font-normal">
              دانشپذیر الف
            </span>
            <span className=" text-[10px] font-normal sn:text-sm  text-neutral-gray50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sn:gap-6 py-4 px-3 sn:p-8 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] rounded-[15px] bg-neutral-white">
          <div className="rounded-[10px]">ax</div>
          <div className=" flex flex-col sn:gap-3">
            <span className=" text-base sn:text-2xl font-medium sn:font-normal text-secondary-main">
              کارنامه آزمون
            </span>
            <span className=" text-base font-medium sn:text-[28px] sn:font-normal">
              دانشپذیر الف
            </span>
            <span className=" text-[10px] font-normal sn:text-sm  text-neutral-gray50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sn:gap-6 py-4 px-3 sn:p-8 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] rounded-[15px] bg-neutral-white">
          <div className="rounded-[10px]">ax</div>
          <div className=" flex flex-col sn:gap-3">
            <span className=" text-base sn:text-2xl font-medium sn:font-normal text-secondary-main">
              کارنامه آزمون
            </span>
            <span className=" text-base font-medium sn:text-[28px] sn:font-normal">
              دانشپذیر الف
            </span>
            <span className=" text-[10px] font-normal sn:text-sm  text-neutral-gray50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
