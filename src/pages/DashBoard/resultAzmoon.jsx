import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";

import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import Arrowleft from "../../assets/icons/arrowleft";

const ResultAzmoon = () => {
  const finalPercent = "70";
  const x = 100 - finalPercent;
  const data = {
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["#F16464", "#313763"],

        data: [finalPercent, x],
        bordercolor: "#313763",
        borderRadius: 10,
        cutout: 90,
        clipe: 40,
        angle: 20,
        weight: 3,
        offset: 2,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      rtl: false,
      position: "bottom",
    },
    scales: {
      drawOnChartArea: false,
    },
    showLine: true, // disable for all datasets
    plugins: {
      scales: {
        drawOnChartArea: true,
      },
      showLine: false, // disable for all datasets
      title: {
        display: true,
        text: " Chart Title",
      },
      tooltip: {
        rtl: true,
      },
      legend: {
        rtl: true,
        align: "start",
      },
    },
  };
  return (
    <div
      className="flex flex-col border-[0.5px] border-border-10  shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] py-[14px] sn:py-6
         px-4  sn:px-8
   justify-between  bg-primary-20"
    >
      <span className=" text-base leading-8 sn:text-2xl  font-bold text-right text-secondary-main">
        نتایج اخرین آزمون های انجام شده
      </span>
      <div className="flex  justify-between">
        <div className="flex flex-col gap-1 sn:gap-4 ">
          <Doughnut data={data} options={options}></Doughnut>
          <div className="flex flex-col  gap-1">
            <span className=" text-xs sn:text-base leading-6 font-semibold text-right text-forth-main">
              آزمون تخصصی
            </span>
            <span className=" text-xs sn:text-base leading-6 font-normal text-right text-neutral-black">
              آزمون شماره 1
            </span>
            <span className=" text-[10px] sn:text-sm leading-5 font-normal text-right text-primary-gray2">
              درصد نهایی : 30
            </span>
          </div>
          <Link to="/testdetails">
            <DivLink>
              آزمون دوباره
              <Arrowleft width={"14"} height={"14"} />
            </DivLink>
          </Link>
        </div>
        <div className="flex flex-col gap-1  sn:gap-4 ">
          <Doughnut data={data}></Doughnut>

          <div className="flex flex-col  gap-1">
            <span className=" text-xs  sn:text-base leading-6 font-semibold text-right text-forth-main">
              آزمون جمع‌بندی
            </span>
            <span className=" text-xs  sn:text-base leading-6 font-normal text-right text-neutral-black">
              آزمون شماره 2
            </span>
            <span className=" text-[10px]  sn:text-sm leading-5 font-normal text-right text-primary-gray2">
              درصد نهایی : 70
            </span>
          </div>
          <Link to="/testdetails">
            <DivLink>
              آزمون دوباره
              <Arrowleft width={"14"} height={"14"} />
            </DivLink>
          </Link>
        </div>
        <div className="flex flex-col gap-1  sn:gap-4 ">
          <Doughnut
            style={{
              "@media screen and (min-width:390px)": {
                width: 10,
                height: 10,
              },
            }}
            data={data}
          ></Doughnut>

          <div className="flex flex-col  gap-1">
            <span className=" text-xs  sn:text-base leading-6 font-semibold text-right text-forth-main">
              آزمون جامع
            </span>
            <span className=" text-xs  sn:text-base leading-6 font-normal text-right text-neutral-black">
              آزمون شماره 3
            </span>
            <span className=" text-[10px]  sn:text-sm leading-5 font-normal text-right text-primary-gray2">
              درصد نهایی : 50
            </span>
          </div>
          <Link to="/testdetails">
            <DivLink>
              آزمون دوباره
              <Arrowleft stroke={"#FDFDFD"} width={"14"} height={"14"} />
            </DivLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultAzmoon;
