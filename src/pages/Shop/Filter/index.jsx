import React from "react";
import Button2 from "../../../component/modal/Button2";
import ButtonShop from "../../../component/modal/ButtonShop";
import DivLink from "../../../component/modal/DivLink";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div>
      <div className="flex flex-col sn:flex-row sn:items-center gap-4 sn:gap-8 py-8 px-4 sn:px-16 mt-7 ">
        <div className="flex justify-between items-center sn:gap-8">
          <Button2>دسته بندی ها</Button2>

          <Button2> مرتب سازی</Button2>

          <ButtonShop>پاک کردن فیلترها </ButtonShop>
        </div>

        <div className="flex justify-between items-center p-2 sn:py-0 sn:px-4 rounded-[15px] border-[1px] border-tertiary-main">
          <span className=" text-base sn:text-[28px] leading-8 sn:leading-9 font-medium sn:font-normal text-tertiary-main">
            جستجو محصولات
          </span>
          <div className=" text-tertiary-main">icon</div>
        </div>
      </div>
      <div className="flex flex-col sn:flex-row sn:items-center gap-4 sn:gap-8 py-8 px-4 sn:px-16 mt-7 ">
        <div className="flex justify-between items-center sn:gap-8">
          <Link to="/category ">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              دسته بندی ها
              <div>icon</div>
            </DivLink>
          </Link>
          <Link to="/filters ">
            <DivLink flex={"flex items-center gap-1 sn:gap-[10px]"}>
              مرتب سازی
              <div>icon</div>
            </DivLink>
          </Link>
          <DivLink
            textcolor={"text-tertiary-main"}
            bgcolor={"bg-white"}
            bordered={" border-[1px] border-tertiary-main"}
          >
            پاک کردن فیلترها
          </DivLink>
        </div>
        <Link to="/search ">
          <DivLink
            flex={"flex items-center gap-1 sn:gap-[10px]"}
            textcolor={"text-tertiary-main"}
            bgcolor={"bg-white"}
            bordered={" border-[1px] border-tertiary-main"}
          >
            جستجو محصولات
            <div>icon</div>
          </DivLink>
        </Link>
      </div>
    </div>
  );
};

export default Filter;
