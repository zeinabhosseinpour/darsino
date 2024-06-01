import Chartpie01 from "../assets/icons/chartpie01";
import Shoppingbag from "../assets/icons/shoppingbag";
import Pen from "../assets/icons/pen";
import Chat02 from "../assets/icons/chat02";
import Paly from "../assets/icons/paly";
import Elearning from "../assets/icons/elearning";
import Documenttext from "../assets/icons/documenttext";
import Quiz from "../assets/icons/quiz";
import Home04 from "../assets/icons/home04";
import Out from "../assets/icons/out";

const ProfileMenu = () => {
  return (
    <div
      className="hidden sn:flex sn:pt-8 sn:pr-16 sn:pb-16 sn:pl-0 sn:gap-[10px]  sn:w-[360px] bg-primary-gray
    border-[1px] border-border-10 
         shadow-[0_0_5px_1px_#0000001A] sn:rounded-tl-[15px] sn:rounded-bl-[15px]"
    >
      <div className="flex flex-col gap-16">
        <div className=" flex flex-col gap-4 text-center">
          <div>aks</div>
          <span className=" text-[22px] leading-10 font-normal text-neutral-black">
            نیوشا زرافشان
          </span>
        </div>
        <div className="flex flex-col gap-16 text-right">
          <div className="flex flex-col gap-9">
            <div className="flex items-center gap-4 p-[2px]">
              <Chartpie01 width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black text-center">
                داشبورد
              </span>
            </div>

            <div className="flex items-center gap-4 p-[2px]">
              <Shoppingbag width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                سبد خرید
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Pen width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                آزمون ها
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Chat02 width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                مشاوره ها
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Paly width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                ویدئوهای آموزشی
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Elearning width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                کلاس های آنلاین
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Documenttext width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                جزوه و درسنامه ها
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Quiz width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                نمونه سوال و پروژه ها
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-[2px]">
              <Home04 width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                صفحه اصلی
              </span>
            </div>
            <div className="flex items-center gap-4 p-[2px]">
              <Out width={"28"} height={"28"} />
              <span className=" text-[22px] leading-10 font-normal text-neutral-black">
                خروج از حساب
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
