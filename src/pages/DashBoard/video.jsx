import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Arrowleft from "../../assets/icons/arrowleft";

const Video = () => {
  return (
    <div
      className="flex flex-col justify-between border-[0.5px] border-border-10  shadow-[0_0_5px_1px_#0000001A]  
      rounded-[15px]  p-2  sn:py-6 sn:px-4
       
  
  bg-primary-20"
    >
      <span className=" text-sm sn:text-[22px] leading-8 font-bold text-right text-secondary-main">
        ادامه ویدئوهای آموزشی
      </span>
      <div className="flex flex-col gap-[6px] ">
        <div className="flex gap-[10px]">
          <div className="rounded-[15px] border border-border-57 bg-primary-rectengle">
            r
          </div>
        </div>
        <span className=" text-xs sn:text-base sn:leading-8 leading-8 font-medium text-right text-black">
          آموزش مبحث الف
        </span>

        <span className=" text-[8px] sn:text-xs  leading-4 font-light text-right text-neutral-gray50">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </span>
      </div>
      <div className="flex justify-end items-center  gap-[10px]">
        <Link to="/videos">
          <DivLink>
            مشاهده همه
            <Arrowleft stroke={"#FDFDFD"} width={"28"} height={"28"} />
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default Video;
