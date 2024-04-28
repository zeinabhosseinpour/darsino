import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../../../component/modal/DivLink";

const Videos = () => {
  return (
    <div className="flex flex-col gap-8 py-8 sn:p-16 sn:gap-9 sn:bg-neutral-shop  sn:border-[0.2px] sn:border-border-25">
      <div className="flex flex-col sn:flex-row sn:justify-between sn:items-center gap-2 px-4 sn:px-0">
        <div className="flex flex-col gap-2 sn:gap-[18px] text-right">
          <span className="text-[22px] sn:text-[28px] font-normal text-secondary-main">
            دوره‌های آموزشی درسینو
          </span>
          <span className=" text-base font-medium sn:text-4xl sn:font-normal">
            کسب مهارت مورد نیاز برای موفقیت
          </span>
        </div>
        <div className="flex gao-[10px] justify-end">
          <Link to="/videos ">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              مشاهده بیشتر
              <div>icon</div>
            </DivLink>
          </Link>
        </div>
      </div>
      <div className="grid grid-rows-1 sn:grid-cols-3 sn:gap-2 ">
        <div className="flex flex-col gap-[18px] sn:gap-7 rounded-[15px] border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] p-4  sn:py-6 sn:px-[18px] ">
          <div className="border-[1px] bg-primary-main rounded-[15px]">
            video
          </div>
          <div className="flex flex-col gap-2 sn:gap-4 text-right">
            <span className="text-[22px]  font-normal">
              دوره‌های آموزشی ویدئویی
            </span>
            <span className="text-[10px] sn:text-sm sn:font-light font-normal text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] sn:gap-7 rounded-[15px] border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] p-4  sn:py-6 sn:px-[18px] ">
          <div className="border-[1px] bg-primary-main rounded-[15px]">
            video
          </div>
          <div className="flex flex-col gap-2 sn:gap-4 text-right">
            <span className="text-[22px]  font-normal">
              دوره‌های آموزشی ویدئویی
            </span>
            <span className="text-[10px] sn:text-sm sn:font-light font-normal text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] sn:gap-7 rounded-[15px] border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] p-4  sn:py-6 sn:px-[18px] ">
          <div className="border-[1px] bg-primary-main rounded-[15px]">
            video
          </div>
          <div className="flex flex-col gap-2 sn:gap-4 text-right">
            <span className="text-[22px]  font-normal">
              دوره‌های آموزشی ویدئویی
            </span>
            <span className="text-[10px] sn:text-sm sn:font-light font-normal text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
