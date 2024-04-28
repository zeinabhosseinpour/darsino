import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";

const ProductDetails = () => {
  return (
    <div className=" flex justify-center items-center py-8 px-4 bg-neutral-gray snn:bg-primary-35 sn:rounded-[10px] rounded-[15px]">
      <div
        className=" flex flex-col justify-between p-4 sn:p-8 sn:gap-[61px] rounded-[15px] border-[1px] border-border-10
       shadow-[0_0_5px_1px_#0000001A] bg-neutral-white12 text-right  "
      >
        <div className="flex flex-col gap-3 text-right">
          <span className=" text-base sn:text-[28px] leading-9  font-normal text-neutral-white">
            آزمون تخصصی
          </span>
          <span className=" text-lg sn:text-[32px] leading-10 font-normal text-secondary-main text-right">
            آزمون شماره 3
          </span>
        </div>
        <span className=" text-[8px] sn:text-base leading-6 sn:leading-8 font-medium text-neutral-gray75 ">
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
          از طراحان گرافیک است... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          از صنعت چاپ، و با استفاده از طراحان گرافیک است..
        </span>
        <div className="flex justify-center items-center  gap-2">
          <div className="flex py-1 sn:py-2 sn:px-3 px-2 gap-[10px] rounded-[15px]">
            <span className=" text-lg sn:text-2xl leading-8 font-normal text-neutral-white">
              25000 تومان
            </span>
          </div>

          <Link to="/shoppingcard">
            <DivLink
              bordered={"border-[1px] border-eutral-white"}
              flex={"flex items-center gap-1 sn:gap-[10px]"}
            >
              افزودن به کارت
              <div>icon</div>
            </DivLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
