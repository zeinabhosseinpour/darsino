import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import { Bar } from "react-chartjs-2";

const Progress = () => {
  const labels = ["1", "2", "3", "4", "5", "6", "7"];

  const data = {
    labels: labels,
    showLine: false,

    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["#F16464", "#313763"],
        fill: false,
        data: [0, 25, 50, 75, 100],
        bordercolor: "#313763",
        borderRadius: 10,
        cutout: 90,
        borderCapStylet: "round",
        rtl: true,

        options: {
          legend: {
            rtl: false,
          },
          responsive: true,
          indexAxis: "y",

          scales: {
            drawOnChartArea: false,
            x: {
              position: "top", // تغییر موقعیت محور X به بالا
              ticks: {
                reverse: true, // معکوس کردن ترتیب مقادیر محور X
              },
            },
            y: {
              reverse: true,
            },
          },
          showLine: false, // disable for all datasets
          plugins: {
            title: {
              display: true,
              text: "Custom Chart Title",
            },
            tooltip: {
              rtl: true,
            },
            legend: {
              rtl: true,
              align: "start",
            },
          },
        },
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      rtl: false,
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
   gap-[18px] sn:justify-between sn:gap-0 bg-primary-20"
    >
      <div className="flex justify-between sn:gap-40 items-center">
        <span className=" text-[18px] sn:text-2xl sn:leading-[44px] leading-6 font-bold text-right text-secondary-main">
          آنالیز پیشرفت شما
        </span>
        <DivLink textcolor={"text-neutral-white"} bgcolor={"bg-primary-main"}>
          در دو هفته گذشته
        </DivLink>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Progress;
