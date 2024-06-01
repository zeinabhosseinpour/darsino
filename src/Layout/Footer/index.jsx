import React from "react";

// package

import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Telegram from "../../assets/icons/telegram";
import Instagram from "../../assets/icons/instagram";
import Mail from "../../assets/icons/mail";
import Linkedin from "../../assets/icons/linkedin";

const Footer = () => {
  return (
    <div className=" flex flex-col gap-8 py-6 px-0 sn:flex-row sn:gap-[140px] sn:p-16 bg-primary-main ">
      <div className="flex flex-col sn:justify-between   gap-8 py-0  px-4">
        <div className="flex justify-between  sn:gap-16 ">
          <nav className="text-neutral-white flex flex-col items-start text-right gap-6 sn:gap-8">
            <div className=" text-2xl sn:text-[28px] sn:leading-[38px] font-normal  ">
              خدمات درسینو
            </div>
            <ul className="flex flex-col items-start   ">
              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base leading-[60px] font-medium sn:text-xl sn:leading-[60px]"
                >
                  ویدئوهای آموزشی
                </Link>
              </li>
              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base leading-[60px] font-medium sn:text-xl sn:leading-[60px]"
                >
                  کلاس های آموزشی
                </Link>
              </li>

              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base leading-[60px] font-medium sn:text-xl sn:leading-[60px]"
                >
                  ارائه جزوه و درسنامه
                </Link>
              </li>

              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base leading-[60px] font-medium sn:text-xl sn:leading-[60px]"
                >
                  آزمون‌های تخصصی و جامع
                </Link>
              </li>

              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base leading-[60px] font-medium sn:text-xl sn:leading-[60px]"
                >
                  نمونه سوال و پروژه‌ها
                </Link>
              </li>
              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base leading-[60px] font-medium sn:text-xl sn:leading-[60px]"
                >
                  مشاوره عمومی و تخصصی
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="text-neutral-white flex flex-col gap-6 sn:gap-8 text-right">
            <div className=" text-2xl sn:text-[28px] sn:leading-[38px]   font-normal  ">
              ارتباط با ما
            </div>
            <ul className="flex flex-col items-start  gap-[10px]">
              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className=" text-base sn:text-xl sn:leading-[60px] leading-[60px] font-medium"
                >
                  درباره ما
                </Link>
              </li>
              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className="text-base sn:text-xl sn:leading-[60px] leading-[60px] font-medium"
                >
                  ارتباط با ما
                </Link>
              </li>

              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className="text-base sn:text-xl sn:leading-[60px] leading-[60px] font-medium"
                >
                  همکاری با ما
                </Link>
              </li>

              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className="text-base sn:text-xl sn:leading-[60px] leading-[60px] font-medium"
                >
                  پشتیبانی
                </Link>
              </li>

              <li className="flex gap-[10px]">
                <Link
                  to="/"
                  className="text-base sn:text-xl sn:leading-[60px] leading-[60px] font-medium"
                >
                  بلاگ
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-between gap-[19px] sn:gap-[44px]">
          <div className=" w-[75px] h-[75px] sn:w-[90px] sn:h-[90px] bg-neutral-gray75">
            r1
          </div>
          <div className=" w-[75px] h-[75px] sn:w-[90px] sn:h-[90px] bg-neutral-gray75">
            r2
          </div>
          <div className=" w-[75px] h-[75px] sn:w-[90px] sn:h-[90px] bg-neutral-gray75">
            r3
          </div>
          <div className=" w-[75px] h-[75px] sn:w-[90px] sn:h-[90px] bg-neutral-gray75">
            r4
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 sn:gap-12 ">
        <div className="flex flex-col gap-8 sn:gap-12">
          <div className="flex gap-4 sn:justify-between ">
            <div className="flex flex-col gap-2 sn:gap-4 text-left justify-center items-end  ">
              <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
                Linkdin
                <Linkedin />
              </DivLink>

              <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
                Instagram
                <Instagram />
              </DivLink>

              <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
                info@darsino.com
                <Mail />
              </DivLink>
            </div>
            <div className=" w-40 h-40 sn:w-[300px] sn:h-[300px]  rounded-xl bg-neutral-gray75">
              rectengle
            </div>
          </div>
          <span className="text-neutral-white text-sm leading-8 sn:leading-[52px] font-normal sn:text-base text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
          </span>
        </div>
        <div className="flex justify-center gap-4">
          <div className="flex justify-center gap-2">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              کانال تلگرام
              <Telegram fill={"#FDFDFD"} width={"24"} height={"24"} />
            </DivLink>

            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              پشتیبانی تلگرام
              <Telegram fill={"#FDFDFD"} width={"24"} height={"24"} />
            </DivLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
