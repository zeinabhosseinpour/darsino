import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Chat02 from "../../assets/icons/chat02";
import Arrowleft from "../../assets/icons/arrowleft";

const Consult = () => {
  return (
    <div
      className="flex flex-col justify-between border-[0.5px] border-border-10  shadow-[0_0_5px_1px_#0000001A]  
      rounded-[15px] sn:py-6 p-2
       sn:px-4 
  
  bg-primary-20"
    >
      <span className=" text-xs sn:text-[22px] leading-8 font-bold text-right text-secondary-main">
        مشاوره ها
      </span>
      <div className="flex flex-col gap-1 sn:gap-4">
        <div className="flex flex-col gap-[6px] sn:gap-1">
          <div className="flex items-center  py-1 sn:py-[2px]   px-2 sn:px-3   gap-1  shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] bg-primary-60">
            <Chat02 width={"28"} height={"28"} />

            <span className=" text-xs sn:text-xl sn:leading-10 leading-6 font-medium text-right text-forth-main">
              مشاوره‌های درسی
            </span>
          </div>
          <div className="flex flex-col  py-0   px-2 sn:px-8  gap-1">
            <span className=" text-[8px] sn:text-base sn:leading-8 leading-4 font-normal text-right text-primary-main">
              مشاور شماره یک
            </span>
            <span className=" text-[8px] sn:text-base sn:leading-8 leading-4 font-normal text-right text-primary-main">
              مشاور شماره دو
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[6px] sn:gap-1">
          <div className="flex items-center py-1 sn:py-[2px]   px-2 sn:px-3   gap-1  shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] bg-primary-60">
            <Chat02 width={"28"} height={"28"} />

            <span className=" text-xs sn:text-xl sn:leading-10 leading-6 font-medium text-right text-forth-main">
              مشاوره‌های مسیر شغلی
            </span>
          </div>
          <div className="flex flex-col  py-0   px-2 sn:px-8  gap-1">
            <span className=" text-[8px] sn:text-base sn:leading-8 leading-4 font-normal text-right text-primary-main">
              مشاور شماره یک
            </span>
            <span className=" text-[8px] sn:text-base sn:leading-8 leading-4 font-normal text-right text-primary-main">
              مشاور شماره دو
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end  gap-[10px]">
        <Link to="/consult">
          <DivLink>
            مشاهده همه
            <Arrowleft stroke={"#FDFDFD"} width={"28"} height={"28"} />
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default Consult;
