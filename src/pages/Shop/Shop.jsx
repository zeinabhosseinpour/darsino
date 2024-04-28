import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";

const Shopp = () => {
  return (
    // <div className="flex gap-[9px] sn:gap-4">
    <div className="flex gap-8 p-4 sn:gap-9 sn:p-16 sn:border-[0.2px] sn:border-border-25 sn:bg-neutral-shop sn:mt-16 ">
      <div className="grid grid-cols-2 sn:grid-cols-4  gap-4">
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10 
           bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px] text-right  "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex items-center  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden w-[30px] h-[30px] gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            {/* <Link to="/productdetails">
              <div className="hidden sn:flex sn:py-2 sn:px-3 sn:gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
                <span className=" text-sm leading-5 font-normal text-tertiary-main">
                  اطلاعات بیشتر
                </span>
              </div>
            </Link> */}
            <Link to="/productdetails" className="hidden sn:flex gap-[10px]">
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
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]  text-right  "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            {/* <div className="hidden sn:flex sn:py-2 sn:px-3 sn:gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
              <span className=" text-sm leading-5 font-normal text-tertiary-main">
                اطلاعات بیشتر
              </span>
            </div> */}
            <Link to="/productdetails" className="hidden sn:flex gap-[10px]">
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
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]  text-right "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            <Link to="/productdetails" className="hidden sn:flex">
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
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]  text-right  "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            <Link to="/productdetails" className="hidden sn:flex">
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
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]   text-right"
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            <div className="hidden sn:flex sn:py-2 sn:px-3 sn:gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
              <span className=" text-sm leading-5 font-normal text-tertiary-main">
                اطلاعات بیشتر
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]  text-right "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            <div className="hidden sn:flex sn:py-2 sn:px-3 sn:gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
              <span className=" text-sm leading-5 font-normal text-tertiary-main">
                اطلاعات بیشتر
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]  text-right  "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            <div className="hidden sn:flex sn:py-2 sn:px-3 sn:gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
              <span className=" text-sm leading-5 font-normal text-tertiary-main">
                اطلاعات بیشتر
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col px-3 py-4 sn:p-8 gap-3   sn:gap-6 border-[1px] border-border-10  bg-neutral-white shadow-[0_0_5px_1px_#0000001A]
       rounded-[15px]  text-right  "
        >
          <div className=" bg-primary-35 rounded-[10px]">icon</div>
          <div className="flex flex-col items-start text-right gap-3">
            <span className="text-secondary-main sn:text-tertiary-main text-base leading-8 font-medium sn:text-2xl sn:font-normal ">
              کلاس آنلاین
            </span>
            <div className=" text-base  leading-8 font-medium sn:text-[28px] sn:leading-9 sn:font-normal text-right text-black ">
              درس تخصصی ب
            </div>
            <div className=" text-neutral-gray50 text-[10px] leading-5 sn:text-sm  font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است...
            </div>
          </div>
          <div className="flex  justify-between sn:gap-2">
            <div className="flex  py-2 px-3 gap-[10px]">
              <span className=" text-base sn:text-xl leading-8 font-normal text-secondary-main">
                25000 تومان
              </span>
            </div>
            <div className="flex sn:hidden gap-1 p-2 rounded-[15px] bg-secondary-main">
              icon
            </div>
            <div className="hidden sn:flex sn:py-2 sn:px-3 sn:gap-[10px] rounded-[15px] border-[1px] border-tertiary-main">
              <span className=" text-sm leading-5 font-normal text-tertiary-main">
                اطلاعات بیشتر
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopp;
