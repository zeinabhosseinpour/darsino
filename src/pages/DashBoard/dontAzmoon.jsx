import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";

import Pen from "../../assets/icons/pen";
import Arrowleft from "../../assets/icons/arrowleft";

const DontAzmoon = () => {
  return (
    <div
      className="flex flex-col justify-between border-[0.5px] border-border-10  shadow-[0_0_5px_1px_#0000001A]  
      rounded-[15px] sn:py-6 p-2
       sn:px-8  
  
  bg-primary-20"
    >
      <span className=" text-xs sn:text-2xl leading-8 font-bold text-right text-secondary-main">
        آزمون‌های انجام نشده
      </span>
      <div className="flex flex-col gap-3 sn:gap-[18px]">
        <div className="flex flex-col gap-[6px] sn:gap-2">
          <div className="flex items-center py-1 sn:py-[2px]  px-2  gap-1  rounded-[15px] shadow-[0_0_5px_1px_#0000001A] bg-primary-60">
            <Pen
              width={{
                "@media screen and (min-width:390px)": {
                  width: 30,
                },
              }}
              height={"28"}
            />
            <span className=" text-xs sn:text-[22px] leading-6 sn:leading-10 font-medium text-right text-forth-main">
              آزمون‌های جامع
            </span>
          </div>
          <div className="flex flex-col  py-0  px-8  gap-[6px] sn:gap-1 ">
            <span className=" text-[8px] sn:text-base leading-3 font-normal text-right text-primary-main">
              آزمون شماره 4
            </span>
            <span className=" text-[8px] sn:text-base leading-3 font-normal text-right text-primary-main">
              آزمون شماره 5
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[6px] sn:gap-2">
          <div className="flex items-center py-1 sn:py-[2px]  px-2  gap-1  rounded-[15px] shadow-[0_0_5px_1px_#0000001A] bg-primary-60">
            <span className=" text-xs sn:text-[22px] leading-6 sn:leading-10 font-medium text-right text-forth-main">
              آزمون‌های تخصصی
            </span>
          </div>
          <div className="flex flex-col  py-0  px-8  gap-[6px] sn:gap-1 ">
            <span className=" text-[8px] sn:text-base leading-3 font-normal text-right text-primary-main">
              آزمون شماره 4
            </span>
            <span className=" text-[8px] sn:text-base leading-3 font-normal text-right text-primary-main">
              آزمون شماره 5
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end  gap-[10px]">
        <Link to="/testdashboard">
          <DivLink>
            مشاهده همه
            <Arrowleft stroke={"#FDFDFD"} width={"28"} height={"28"} />
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default DontAzmoon;
