import React from "react";
import DivLink from "../../component/modal/DivLink";

const ShoppingCard = () => {
  return (
    <div
      className="flex flex-col justify-between sn:border-[0.5px] sn:rounded-[15px] sn:border-border-10 
    sn:shadow-[0_0_5px_1px_#0000001A]  sn:p-8 sn:bg-primary-20 gap-5 sn:gap-[51px] "
    >
      <div className="flex gap-[10px] py-0 px-4 text-right">
        <span className=" text-lg sn:text-4xl sn:leading-[44px] sn:font-medium leading-6 font-semibold text-secondary-main">
          در انتظار خرید
        </span>
      </div>
      <div className="flex flex-col px-5 sn:px-10 gap-2 sn:gap-6">
        <div
          className="flex justify-between gap-3 items-center py-3 px-2 sn:p-8  border-[1px] border-border-10 bg-neutral-white50 rounded-[15px] 
         shadow-[0_0_5px_1px_#0000001A]"
        >
          <div className=" bg-neutral-gray25 rounded-[15px] w-[65px] h-[70px] sn:w-[200px] sn:h-[200px]">
            rectengle
          </div>
          <div className="flex flex-col gap-2 sn:gap-8 text-right">
            <span className=" text-sm sn:text-[32px] sn:leading-10 sn:font-normal font-medium text-black">
              آزمون شماره 1
            </span>
            <span className=" text-[8px] sn:text-sm  leading-[15px] sn:font-normal font-light text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          {/* <div className=" flex items-center py-[6px] sn:py-[10px] px-2 sn:px-6 gap-2 sn:gap-[10px] rounded-[15px] bg-secondary-main">
            <span className=" text-xs sn:text-[22px] sn:leading-10 leading-5 font-normal text-neutral-white">
              30000 تومان
            </span>
            <div>icon</div>
          </div> */}

          <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
            30000 تومان
            <div>icon</div>
          </DivLink>
        </div>
        <div
          className="flex justify-between gap-3 items-center py-3 px-2 sn:p-8  border-[1px] border-border-10 bg-neutral-white50 rounded-[15px] 
         shadow-[0_0_5px_1px_#0000001A]"
        >
          <div className=" bg-neutral-gray25 rounded-[15px] w-[65px] h-[70px] sn:w-[200px] sn:h-[200px]">
            rectengle
          </div>
          <div className="flex flex-col gap-2 sn:gap-8 text-right">
            <span className=" text-sm sn:text-[32px] sn:leading-10 sn:font-normal font-medium text-black">
              جزوه تخصصی
            </span>
            <span className=" text-[8px] sn:text-sm  leading-[15px] sn:font-normal font-light text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          <div className=" flex items-center py-[6px] sn:py-[10px] px-2 sn:px-6 gap-2 sn:gap-[10px] rounded-[15px] bg-secondary-main">
            <span className=" text-xs sn:text-[22px] sn:leading-10 leading-5 font-normal text-neutral-white">
              25000 تومان
            </span>
            <div>icon</div>
          </div>
        </div>
        <div
          className="flex justify-between gap-3 items-center py-3 px-2 sn:p-8  border-[1px] border-border-10 bg-neutral-white50 rounded-[15px] 
         shadow-[0_0_5px_1px_#0000001A]"
        >
          <div className=" bg-neutral-gray25 rounded-[15px] w-[65px] h-[70px] sn:w-[200px] sn:h-[200px]">
            rectengle
          </div>
          <div className="flex flex-col gap-2 sn:gap-8 text-right">
            <span className=" text-sm sn:text-[32px] sn:leading-10 sn:font-normal font-medium text-black">
              ویدئوهای درس ب
            </span>
            <span className=" text-[8px] sn:text-sm  leading-[15px] sn:font-normal font-light text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          <div className=" flex items-center py-[6px] sn:py-[10px] px-2 sn:px-6 gap-2 sn:gap-[10px] rounded-[15px] bg-secondary-main">
            <span className=" text-xs sn:text-[22px] sn:leading-10 leading-5 font-normal text-neutral-white">
              30000 تومان
            </span>
            <div>icon</div>
          </div>
        </div>
        {/* <div
          className="flex justify-between gap-3 items-center py-3 px-2 sn:p-8  border-[1px] border-border-10  shadow-[0_0_5px_1px_#0000001A] bg-neutral-white50 rounded-[15px] 
        "
        >
          <div className=" bg-neutral-gray25 rounded-[15px] w-[65px] h-[70px] sn:w-[200px] sn:h-[200px]">
            rectengle
          </div>
          <div className="flex flex-col gap-2 sn:gap-8 text-right">
            <span className=" text-sm sn:text-[32px] sn:leading-10 sn:font-normal font-medium text-black">
              آزمون شماره 1
            </span>
            <span className=" text-[8px] sn:text-sm  leading-[15px] sn:font-normal font-light text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          <div className=" flex items-center py-[6px] sn:py-[10px] px-2 sn:px-6 gap-2 sn:gap-[10px] rounded-[15px] bg-secondary-main">
            <span className=" text-xs sn:text-[22px] sn:leading-10 leading-5 font-normal text-neutral-white">
              30000 تومان
            </span>
            <div>icon</div>
          </div>
        </div> */}
        {/* <div
          className="flex justify-between gap-3 items-center py-3 px-2 sn:p-8  border-[1px] border-border-10 bg-neutral-white50 rounded-[15px] 
         shadow-[0_0_5px_1px_#0000001A]"
        >
          <div className=" bg-neutral-gray25 rounded-[15px] w-[65px] h-[70px] sn:w-[200px] sn:h-[200px]">
            rectengle
          </div>
          <div className="flex flex-col gap-2 sn:gap-8 text-right">
            <span className=" text-sm sn:text-[32px] sn:leading-10 sn:font-normal font-medium text-black">
              آزمون شماره 1
            </span>
            <span className=" text-[8px] sn:text-sm  leading-[15px] sn:font-normal font-light text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          <div className=" flex items-center py-[6px] sn:py-[10px] px-2 sn:px-6 gap-2 sn:gap-[10px] rounded-[15px] bg-secondary-main">
            <span className=" text-xs sn:text-[22px] sn:leading-10 leading-5 font-normal text-neutral-white">
              30000 تومان
            </span>
            <div>icon</div>
          </div>
        </div>
        <div
          className="flex justify-between gap-3 items-center py-3 px-2 sn:p-8  border-[1px] border-border-10 bg-neutral-white50 rounded-[15px] 
         shadow-[0_0_5px_1px_#0000001A]"
        >
          <div className=" bg-neutral-gray25 rounded-[15px] w-[65px] h-[70px] sn:w-[200px] sn:h-[200px]">
            rectengle
          </div>
          <div className="flex flex-col gap-2 sn:gap-8 text-right">
            <span className=" text-sm sn:text-[32px] sn:leading-10 sn:font-normal font-medium text-black">
              آزمون شماره 1
            </span>
            <span className=" text-[8px] sn:text-sm  leading-[15px] sn:font-normal font-light text-neutral-gray25">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          <div className=" flex items-center py-[6px] sn:py-[10px] px-2 sn:px-6 gap-2 sn:gap-[10px] rounded-[15px] bg-secondary-main">
            <span className=" text-xs sn:text-[22px] sn:leading-10 leading-5 font-normal text-neutral-white">
              30000 تومان
            </span>
            <div>icon</div>
          </div>
        </div> */}
      </div>
      <div className="flex justify-between items-center sn:p-0 pt-4 pb-16 px-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-[10px] sn:py-0 sn:px-4">
            <span className=" text-sm sn:text-[32px]  leading-10 font-medium text-neutral-black">
              جمع کل سبد خرید
            </span>
          </div>
          {/* <div className=" flex p-2 gap-[10px] sn:py-6 sn:px-[10px]  rounded-[15px] border-[1px] border-tertiary-main">
            <span className=" text-xs sn:text-[22px] leading-5 sn:leading-10 font-normal text-tertiary-main">
              80000 تومان
            </span>
          </div> */}
          <DivLink
            textcolor={"text-tertiary-main"}
            bgcolor={"bg-white"}
            bordered={"border-[1px] border-tertiary-main"}
          >
            80000 تومان
          </DivLink>
        </div>
        {/* <div className=" flex items-center py-2 sn:py-[10px] sn:px-6  px-4 gap-2 sn:gap-4 rounded-[15px] bg-secondary-main">
          <span className=" text-xs sn:text-2xl leading-5 font-medium text-neutral-white">
            پرداخت
          </span>
          <div>icon</div>
        </div> */}
        <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
          پرداخت
          <div>icon</div>
        </DivLink>
      </div>
    </div>
  );
};

export default ShoppingCard;
