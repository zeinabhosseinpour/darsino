import React, { useState } from "react";
import Feature from "./feature";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // ارسال انتخاب کاربر به بک‌اند
    // می‌توانید اینجا اطلاعات مربوط به انتخاب کاربر را به بک‌اند ارسال کنید
    console.log("کاربر انتخاب کرد:", event.target.value);
  };
  return (
    <div className=" bg-gray-0">
      <Header />
      <Feature />
      <div className="flex flex-col gap-7 sn:gap-16 p-4">
        <div className="flex flex-col gap-3  sn:gap-8">
          <div className="flex gap-8">
            <span className=" text-base leading-8 font-medium sn:text-[32px] sn:left-10 sn:font-normal text-neutral-black text-right">
              1. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ؟
            </span>
          </div>
          <div className="flex flex-wrap gap-8 sn:gap-4 py-0 px-2 sn:px-8">
            <div className="flex flex-col sn:flex-row gap-3 sn:gap-4">
              <div className="flex gap-1 sn:gap-2">
                <input
                  className=" text-neutral-gray25"
                  type="radio"
                  id="option1"
                  name="quizOption"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleChange}
                />
                <label
                  className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                  htmlFor="option1"
                >
                  لورم ایپسوم 1
                </label>
              </div>
              <div className="flex gap-1 sn:gap-2">
                <input
                  className=" text-neutral-gray25"
                  type="radio"
                  id="option2"
                  name="quizOption"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleChange}
                />
                <label
                  className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                  htmlFor="option2"
                >
                  لورم ایپسوم 2
                </label>
              </div>
            </div>
            <div className="flex flex-col sn:flex-row gap-3 sn:gap-4">
              <div className="flex gap-1 sn:gap-2">
                <input
                  className=" text-neutral-gray25"
                  type="radio"
                  id="option3"
                  name="quizOption"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleChange}
                />
                <label
                  className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                  htmlFor="option3"
                >
                  لورم ایپسوم 3
                </label>
              </div>
              <div className="flex gap-1 sn:gap-2">
                <input
                  className=" text-neutral-gray25"
                  type="radio"
                  id="option4"
                  name="quizOption"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleChange}
                />
                <label
                  className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                  htmlFor="option4"
                >
                  لورم ایپسوم 4
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4  sn:gap-8">
          <div className="flex gap-8">
            <span className=" text-base leading-8 font-medium sn:text-[32px] sn:left-10 sn:font-normal text-neutral-black text-right">
              2. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ؟
            </span>
          </div>
          <div className="flex flex-col gap-2  sn:gap-4 sn:px-11 ">
            <div className="flex gap-1 sn:gap-2">
              <input
                className=" text-neutral-gray25"
                type="radio"
                id="option1"
                name="quizOption"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
              />
              <label
                className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                htmlFor="option1"
              >
                1 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </label>
            </div>
            <div className="flex gap-1 sn:gap-2">
              <input
                className=" text-neutral-gray25"
                type="radio"
                id="option2"
                name="quizOption"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
              />
              <label
                className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                htmlFor="option2"
              >
                2 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </label>
            </div>

            <div className="flex gap-1 sn:gap-2">
              <input
                className=" text-neutral-gray25"
                type="radio"
                id="option3"
                name="quizOption"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleChange}
              />
              <label
                className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                htmlFor="option3"
              >
                3 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </label>
            </div>
            <div className="flex gap-1 sn:gap-2">
              <input
                className=" text-neutral-gray25"
                type="radio"
                id="option4"
                name="quizOption"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={handleChange}
              />
              <label
                className=" text-sm sn:text-[22px] sn:leading-10 font-normal text-neutral-black text-right"
                htmlFor="option4"
              >
                4 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex   gap-6 pt-8 pb-16 px-8">
        <Link to="/testresults">
          <DivLink>اتمام آزمون</DivLink>
        </Link>

        <DivLink
          bgcolor={"bg-white"}
          textcolor={"text-tertiary-main"}
          bordered={" border-[1px] border-tertiary-main"}
        >
          زمان باقی مانده: 29:59
        </DivLink>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
