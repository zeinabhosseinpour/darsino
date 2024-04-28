import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sn:flex-row-reverse sn:justify-between gap-[18px] p-4 sn:p-16 sn:mt-[18px]">
      <div className="border-[1px] border-border-10">icon</div>
      <div className="flex flex-col gap-4 sn:gap-8 text-right">
        <span className=" text-2xl sn:text-4xl sn:leading-[44px] font-normal text-secondary-main font-vazirmatn">
          فروشگاه درسینو
        </span>
        <span className=" text-base sn:text-[32px] leading-8 sn:leading-10 font-medium sn:font-normal text-black">
          مهارت بیشتر با کمترین قیمت
        </span>
        <span className=" text-xs sn:text-[22px] leading-10 font-normal text-neutral-gray25">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </span>
      </div>
    </div>
  );
};

export default Hero;
