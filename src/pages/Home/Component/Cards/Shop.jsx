import React from "react";

// package
import { Link } from "react-router-dom";
import DivLink from "../../../../component/modal/DivLink";
import Arrowleft from "../../../../assets/icons/arrowleft";

const Shop = () => {
  return (
    <div className="flex flex-col gap-8 py-8  sn:gap-9  sn:bg-neutral-shop sn:p-16 sn:border-[0.2px] sn:border-border-25">
      <div className="flex flex-col sn:flex-row gap-2 px-4 sn:px-0  sn:justify-between">
        <div className="flex flex-col sn:gap-[18px] text-right">
          <span className=" text-secondary-main text-[22px] leading-10 sn:text-[28px] font-normal text-right">
            فروشگاه
          </span>
          <span className=" text-base leading-8 font-medium sn:text-4xl sn:font-normal text-black ">
            مهارت بیشتر با کمترین قیمت
          </span>
        </div>
        <div className="flex gap-[10px] justify-end sn:items-end">
          <Link to="/shop">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              مشاهده بیشتر
              <Arrowleft stroke={"#FDFDFD"} width={"36"} height={"36"} />
            </DivLink>
          </Link>
        </div>
      </div>
      <div className="grid  grid-cols-2 sn:grid-cols-4 px-4 sn:px-0 gap-[9px] sn:gap-4">
        <div className="flex flex-col gap-3 px-3 py-4  sn:gap-6 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] bg-neutral-white rounded-[15px] sn:p-8 ">
          <div className="bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-base font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base font-medium sn:text-[28px] leading-9 sn:font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex justify-end items-end gap-1">
            <Link to="/productdetails">
              <DivLink
                textcolor={"text-tertiary-main"}
                bgcolor={"bg-white"}
                bordered={"border-[1px] border-tertiary-main"}
              >
                اطلاعات بیشتر
              </DivLink>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-3 py-4  sn:gap-6 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] bg-neutral-white rounded-[15px] sn:p-8 ">
          <div className="bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-base font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base font-medium sn:text-[28px] leading-9 sn:font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex justify-end items-end gap-1">
            <Link to="/test">
              <DivLink
                textcolor={"text-tertiary-main"}
                bgcolor={"bg-white"}
                bordered={"border-[1px] border-tertiary-main"}
              >
                اطلاعات بیشتر
              </DivLink>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-3 py-4  sn:gap-6 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] bg-neutral-white rounded-[15px] sn:p-8 ">
          <div className="bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-base font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base font-medium sn:text-[28px] leading-9 sn:font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex justify-end items-end gap-1">
            <Link to="/test">
              <DivLink
                textcolor={"text-tertiary-main"}
                bgcolor={"bg-white"}
                bordered={"border-[1px] border-tertiary-main"}
              >
                اطلاعات بیشتر
              </DivLink>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-3 py-4  sn:gap-6 border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] bg-neutral-white rounded-[15px] sn:p-8 ">
          <div className="bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-base font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base font-medium sn:text-[28px] leading-9 sn:font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex justify-end items-end gap-1">
            <Link to="/test">
              <DivLink
                textcolor={"text-tertiary-main"}
                bgcolor={"bg-white"}
                bordered={"border-[1px] border-tertiary-main"}
              >
                اطلاعات بیشتر
              </DivLink>
            </Link>
          </div>
        </div>

        {/* <div className="flex flex-col  gap-6 border-1 bg-neutral-white rounded-[15px] p-8 ">
          <div className=" rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-2xl font-normal ">
              کلاس آنلاین
            </span>
            <div className="text-[28px] leading-9 font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div>اطلاعات بیشتر</div>
        </div>
        <div className="flex flex-col  gap-6 border-1 bg-neutral-white rounded-[15px] p-8 ">
          <div className=" rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-2xl font-normal ">
              کلاس آنلاین
            </span>
            <div className="text-[28px] leading-9 font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div>اطلاعات بیشتر</div>
        </div>
        <div className="flex flex-col  gap-6 border-1 bg-neutral-white rounded-[15px] p-8 ">
          <div className=" rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main text-2xl font-normal ">
              کلاس آنلاین
            </span>
            <div className="text-[28px] leading-9 font-normal text-right ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div>اطلاعات بیشتر</div>
        </div> */}
      </div>
    </div>
  );
};

export default Shop;
