import img1 from "../../assets/ic/Group 12.svg";
const Hero = () => {
  return (
    <div className="flex  flex-col sn:flex-row-reverse sn:justify-between p-4 sn:py-8 sn:px-16 gap-[18px] sn:gap-0">
      <div>
        <img src={img1} alt="hero icon" />
      </div>
      <div className="flex flex-col gap-4 sn:gap-8">
        <div className="flex flex-col gap-2 sn:gap-8">
          <span className=" text-2xl sn:text-4xl font-normal text-secondary-main text-right">
            آزمون های تخصصی، جامع و جمع بندی
          </span>
          <span className="text-2xl font-normal text-black">
            تونستی بهترین خودت باشی یا نه؟
          </span>
          <span className=" text-xs sn:text-[22px] leading-10 text-neutral-gray25 text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
