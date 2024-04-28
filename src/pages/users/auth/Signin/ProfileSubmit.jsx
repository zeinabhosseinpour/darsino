import React from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import Header from "../../../../Layout/Header";

const ProfileSubmit = () => {
  return (
    <div className="flex flex-col  sn:gap-[10px] sn:rounded-[15px] sn:bg-neutral-gray bg-primary-main">
      <Header />

      <div className=" flex flex-col items-center sn:justify-between py-4 px-8 gap-[21px] ">
        <div className={classes.parent1}>
          <span className={classes.register}>ثبت‌ نام</span>
          <div className={classes.childdiv2}></div>
          <span className={classes.register2}>تکمیل پروفایل</span>
          <div className={classes.childdiv1}></div>
          <span className={classes.register2}>احراز </span>
        </div>
        <Form
          name="control-hooks"
          style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          <Form.Item
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "0 32px 0 32px",
              // backgroundColor: "pink",
              // fontSize: "22px",
              // fontWeight: "400px",
              // lineHeight: "40px",
              // color: "#FFFFFF",
            }}
          >
            <Form.Item
              style={{
                fontSize: "22px",
                fontWeight: "400px",
                lineHeight: "40px",
                color: "red",
              }}
              name="family"
              label="نام و نام خانوادگی"
              rules={[
                {
                  required: true,
                  message: "وارد کردن نام و نام خانوادگی الزامی است.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{
                fontSize: "22px",
                fontWeight: "400px",
                lineHeight: "40px",
                color: "red",
                // borderRadius: "45px",
              }}
              name="eyalat"
              label="استان"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{
                  display: "flex",
                  gap: "103px",
                  borderRadius: "15px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  lineHeight: "32px",
                  color: "green",
                  backgroundColor: "#D9D9D9B2",
                }}
                placeholder="انتخاب استان"
                //   onChange={onGenderChange}
                allowClear
              >
                <Option value="male">تهران</Option>
                <Option value="female">مازندران</Option>
                <Option value="other">اصفهان</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item
              name="grade"
              label="پایه تحصیلی"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="انتخاب پایه تحصیلی"
                //   onChange={onGenderChange}
                allowClear
              >
                <Option value="male">پایه دوم</Option>
                <Option value="female">پایه سوم</Option>
                <Option value="other">پایه پنجم</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="gender"
              label="جنسیت"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="انتخاب جنسیت"
                //   onChange={onGenderChange}
                allowClear
              >
                <Option value="male">مرد</Option>
                <Option value="female">زن</Option>
              </Select>
            </Form.Item>
          </Form.Item>
        </Form>
        <div className="sn:hidden flex flex-col  px-0 pt-0 pb-16 gap-4">
          <div className={classes.childdiv1}></div>
          <div className="flex flex-col items-stretch gap-5  ">
            <span className="text-2xl font-semibold text-text-white">
              حساب کاربری دارید؟
            </span>
            <Link to="/submit">
              <div className="flex flex-row gap-4 rounded-[15px]">
                <Button className=" bg-secondary-main h-12 w-full px-6 py-1 text-xl font-normal text-gray-0 ">
                  ورود
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSubmit;
