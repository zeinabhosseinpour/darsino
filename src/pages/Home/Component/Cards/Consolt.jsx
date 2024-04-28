import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../../../component/modal/DivLink";

const Consolt = () => {
  return (
    <div className="flex  flex-col gap-4 p-4 sn:flex-row-reverse sn:gap-[62px] sn:p-16">
      <div className="flex flex-col gap-2 sn:gap-9">
        <div className="flex flex-col items-start gap-2 sn:gap-8 ">
          <div className="flex flex-col gap-2">
            <span className="text-secondary-main text-[22px] sn:text-[28px] leading-10 sn:leading-9 font-normal text-right">
              مشاوره عمومی و تخصصی
            </span>
            <span className=" text-base leading-8 font-medium sn:text-4xl sn:font-normal text-black">
              راه حل موفقیت چه در کنکور چه در بازار کار!
            </span>
          </div>

          <span className="text-right text-[10px] sn:text-[22px] leading-5 sn:leading-10 font-normal text-neutral-gray25">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </span>
        </div>
        <div className="flex justify-end text-left">
          <Link to="/consult ">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              رزرو وقت مشاوره
              <div>icon</div>
            </DivLink>
          </Link>
        </div>
      </div>
      <div>icon</div>
    </div>
  );
};

export default Consolt;
