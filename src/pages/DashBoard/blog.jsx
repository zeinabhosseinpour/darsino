import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Arrowleft from "../../assets/icons/arrowleft";

const Blog = () => {
  return (
    <div
      className="flex flex-col border-[0.5px] border-border-10  shadow-[0_0_5px_1px_#0000001A]  rounded-[15px] 
         p-2 sn:py-6 sn:px-4
   gap-1 sn:justify-between sn:gap-0 bg-primary-20"
    >
      <span className=" text-xs sn:text-[22px] leading-8 font-bold text-right text-secondary-main">
        بلاگ‌های مرتبط
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex  gap-2">
          <div className=" rounded-[15px] bg-primary-rectengle ">r</div>

          <span className=" text-xs sn:text-xl leading-10 font-medium text-right text-forth-main">
            بلاگ شماره 1
          </span>
        </div>
        <div className="flex  gap-2">
          <div className=" rounded-[15px] bg-primary-rectengle ">r</div>
          <span className=" text-xs  sn:text-xl leading-10 font-medium text-right text-forth-main">
            بلاگ شماره 2
          </span>
        </div>
      </div>
      <div className="flex justify-end sn:w-full sn:justify-start  gap-[10px]">
        <Link to="/blogs">
          <DivLink>
            مشاهده همه
            <Arrowleft stroke={"#FDFDFD"} width={"28"} height={"28"} />
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
