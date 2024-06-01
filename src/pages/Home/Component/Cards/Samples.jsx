import React from "react";
import DivLink from "../../../../component/modal/DivLink";

import { Link } from "react-router-dom";
import Arrowleft from "../../../../assets/icons/arrowleft";

const Samples = () => {
  return (
    <div className="flex flex-col sn:flex-row-reverse gap-4 sn:gap-9 p-4 sn:p-16 ">
      <div className="flex flex-col  gap-2 sn:gap-9 text-right">
        <div className="flex flex-col gap-2 sn:gap-8">
          <div className="flex flex-col gap-2 sn:gap-2">
            <span className=" text-[22px] sn:text-[28px] font-normal text-secondary-main">
              نمونه سوال و پروژه های دروس اختصاصی
            </span>
            <span className=" text-base font-medium sn:text-4xl sn:font-normal">
              تمرین کن، آماده باش، بعد برو!
            </span>
          </div>
          <span className="text-[10px] leading-5 sn:text-[22px] sn:leading-10 font-normal text-neutral-gray25">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </span>
        </div>
        <div className="flex justify-end">
          <Link to="/Q/A ">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              دریافت نمونه سوال‌ها
              <Arrowleft stroke={"#FDFDFD"} width={"36"} height={"36"} />
            </DivLink>
          </Link>
        </div>
      </div>
      <div>icon</div>
    </div>
  );
};

export default Samples;
