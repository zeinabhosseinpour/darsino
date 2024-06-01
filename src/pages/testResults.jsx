import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../component/modal/DivLink";
import { Doughnut } from "react-chartjs-2";

const TestResults = () => {
  const correctCount = "7";
  const incorrectCount = 10 - correctCount;
  const data = {
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["#8EC66B", "#D95051"],

        data: [correctCount, incorrectCount],

        borderRadius: 10,
        cutout: 300,
        clipe: 40,
        angle: 20,
        weight: 30,
        offset: 0,
        rotation: 90,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col justify-between items-center gap-12 sn:gap-16 p-4 sn:p-16 rounded-[15px] bg-primary-main sn:bg-neutral-gray">
      <div className="flex flex-col gap-2 sn:gap-4">
        <div className="flex gap-2 sn:gap-4">
          <span className=" text-base sn:text-4xl sn:leading-[44px] font-semibold text-neutral-white text-right">
            آزمون تخصصی شماره 2
          </span>
        </div>
        <div className="flex flex-col gap-4 sn:gap-8">
          <div className="flex gap-4">
            <span className=" text-[10px] leading-6 sn:text-[22px] sn:leading-10 font-normal text-neutral-gray75">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </span>
          </div>
          <div className="flex justify-center gap-2  sn:gap-[13px]">
            <div className="flex  gap-6 sn:gap-8">
              <div className="flex flex-col gap-[6px] sn:gap-2 text-center justify-between items-end">
                <DivLink
                  bgcolor={"bg-fifth-0"}
                  textcolor={"text-neutral-white"}
                >
                  تعداد درست : 7
                </DivLink>
                <DivLink
                  bgcolor={"bg-secondary-0"}
                  textcolor={"text-neutral-white"}
                >
                  تعداد غلط: 3
                </DivLink>
                <DivLink
                  bgcolor={"bg-neutral-gray25"}
                  textcolor={"text-neutral-white"}
                >
                  تعداد بی پاسخ : 0
                </DivLink>
              </div>
              <Doughnut data={data}></Doughnut>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <DivLink>دانلود پاسخنامه</DivLink>
        <DivLink>دانلود سوالات</DivLink>

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

export default TestResults;
