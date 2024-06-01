import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../component/modal/DivLink";

const TestDetails = () => {
  return (
    <div className="flex flex-col p-4   justify-between sn:gap-16   h-[330px] sn:h-[600px] rounded-[15px] bg-primary-main">
      <div className="flex flex-col gap-2 sn:gap-4 ">
        <div className="flex gap-2  sn:gap-4">
          <sapn className=" text-base sn:text-4xl font-semibold text-neutral-white text-right">
            آزمون تخصصی شماره 3
          </sapn>
        </div>
        <div
          style={{
            borderTop: "2px solid #D9D9D9",
            width: "91%",
            height: "2px",
            marginTop: "10px",
          }}
        ></div>

        <div className="flex flex-col gap-4  sn:gap-8">
          <div className="flex gap-4 ">
            <sapn className=" text-[10px] sn:text-[22px] sn:leading-10 leading-6 font-normal text-neutral-gray75 text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </sapn>
          </div>
          <div className="flex flex-col gap-[6px] sn:gap-4">
            <div className="flex items-center gap-2  sn:gap-4 ">
              <Link to="/tests">
                <DivLink
                  bgcolor={"bg-tertiary-main"}
                  textcolor={"text-neutral-white"}
                >
                  تاریخ شروع و پایان
                </DivLink>
              </Link>
              <sapn className=" text-sm  sn:text-[22px] sn:leading-10 leading-6 font-light text-neutral-white text-right">
                02/08/25، ساعت 18 الی 02/08/30، ساعت 18
              </sapn>
            </div>
            <div className="flex items-center gap-2  sn:gap-4 ">
              <Link to="/tests">
                <DivLink
                  bgcolor={"bg-tertiary-main"}
                  textcolor={"text-neutral-white"}
                >
                  زمان پاسخگویی
                </DivLink>
              </Link>
              <sapn className=" text-sm leading-6  sn:text-[22px] sn:leading-10 font-light text-neutral-white text-right">
                30 دقیقه
              </sapn>
            </div>
            <div className="flex items-center gap-2  sn:gap-4 ">
              <Link to="/tests">
                <DivLink
                  bgcolor={"bg-tertiary-main"}
                  textcolor={"text-neutral-white"}
                >
                  تعداد سوالات
                </DivLink>
              </Link>
              <sapn className=" text-sm leading-6  sn:text-[22px] sn:leading-10 font-light text-neutral-white text-right">
                10 سوال تخصصی
              </sapn>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 sn:gap-4 ">
        <Link to="/quiz">
          <DivLink>شروع آزمون</DivLink>
        </Link>
        <Link to="/tests">
          <DivLink
            bgcolor={"bg-transparent"}
            textcolor={"text-neutral-white"}
            bordered={" border-[1px] border-neutral-white"}
          >
            بازگشت به آزمون ها
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default TestDetails;
