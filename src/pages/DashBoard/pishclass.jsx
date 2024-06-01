import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Elearning from "../../assets/icons/elearning";
import Arrowleft from "../../assets/icons/arrowleft";

const Pishclass = () => {
  return (
    <div
      className="flex flex-col justify-between border-[0.5px] border-border-10  shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] p-2 sn:py-6
      sn:px-8
  
  bg-primary-20"
    >
      <span className=" text-sm sn:text-2xl leading-8 font-bold text-right text-secondary-main">
        کلاس های پیش رو
      </span>
      <div className="flex flex-col gap-1 sn:gap-6">
        <div className="flex flex-col  gap-[2px] sn:gap-4">
          <div className="flex   py-1 sn:py-[2px]  px-2 sn:px-3  gap-1 sn:gap-2  rounded-[15px]  shadow-[0_0_5px_1px_#0000001A] bg-neutral-50">
            <Elearning width={"28"} height={"28"} />

            <span className=" text-xs sn:text-[22px]  leading-6 sn:leading-[40px] font-medium text-right text-forth-main">
              کلاس تخصصی الف
            </span>
          </div>
          <div className="flex   py-0  px-2 sn:px-8  gap-2   bg-neutral-50">
            <span className=" text-[10px] sn:text-base sn:leading-8 leading-8 font-normal text-right text-primary-main">
              سه‌شنبه 30 آبان
            </span>
            <span className=" text-[10px] leading-8 font-normal text-right text-primary-main">
              ساعت: 17:30
            </span>
          </div>
        </div>
        <div className="flex flex-col  gap-[2px] sn:gap-4">
          <div className="flex   py-1 sn:py-[2px]  px-2 sn:px-3  gap-1 sn:gap-2  rounded-[15px]  shadow-[0_0_5px_1px_#0000001A] bg-neutral-50">
            <Elearning width={"28"} height={"28"} />

            <span className=" text-xs sn:text-[22px]  leading-6 sn:leading-[40px] font-medium text-right text-forth-main">
              کلاس تخصصی ب
            </span>
          </div>
          <div className="flex   py-0  px-2 sn:px-8  gap-2   bg-neutral-50">
            <span className=" text-[10px] sn:text-base sn:leading-8 leading-8 font-normal text-right text-primary-main">
              سه‌شنبه 30 آبان
            </span>
            <span className=" text-[10px] leading-8 font-normal text-right text-primary-main">
              ساعت: 17:30
            </span>
          </div>
        </div>
      </div>
      <div className="flex  justify-end gap-[10px]">
        <Link to="/onlineclasses">
          <DivLink>
            مشاهده همه
            <Arrowleft stroke={"#FDFDFD"} width={"28"} height={"28"} />
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default Pishclass;
