import React, { useEffect, useState } from "react";

// package
import { Link, useLocation } from "react-router-dom";

import classes from "./style.module.css";

const NavBar = () => {
  const location = useLocation();
  console.log("location", location);
  // state
  const [activeMenuLink, setActiveMenuLink] = useState("");
  console.log("active", activeMenuLink);

  //sideeffect
  // useEffect(() => {
  //   setActiveMenuLink("shop");
  //   console.log("active2", activeMenuLink);
  // });

  // handlers

  const handleItemClick = (item) => {
    setActiveMenuLink(item);
  };
  return (
    <nav>
      <ul className="hidden sn:flex gap-[38px] text-[22px] leading-10 font-normal text-neutral-black">
        {/* <li className="">
          <Link to="/">
            <img alt="logo" />
          </Link>
        </li> */}
        <Link to="/shop" className={classes["nav-menu_item"]}>
          <li
            className={
              location.pathname === "/shop"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
          >
            فروشگاه
          </li>
        </Link>
        <Link to="/tests" className={classes["nav-menu_item"]}>
          <li
            className={
              location.pathname === "/tests"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
          >
            آزمون ها
          </li>
        </Link>
        <Link to="/aboutus" className={classes["nav-menu_item"]}>
          <li
            className={
              location.pathname === "/aboutus"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
          >
            درباره ما
          </li>
        </Link>
        <Link to="/contactus" className={classes["nav-menu_item"]}>
          <li
            className={
              location.pathname === "/contactus"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
          >
            ارتباط با ما
          </li>
        </Link>
        <Link to="/blogs" className={classes["nav-menu_item"]}>
          <li
            className={
              location.pathname === "/blogs"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
          >
            بلاگ ها
          </li>
        </Link>
        {/* <Link to="/shop" className={classes["nav-menu_item"]}>
          <li
            className={
              activeMenuLink === "shop"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
            onClick={() => handleItemClick("shop")}
          >
            فروشگاه
          </li>
        </Link>
        <Link to="/tests" className={classes["nav-menu_item"]}>
          <li
            className={
              activeMenuLink === "tests"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
            onClick={() => handleItemClick("tests")}
          >
            آزمون ها
          </li>
        </Link>
        <Link to="/about us" className={classes["nav-menu_item"]}>
          <li
            className={
              activeMenuLink === "aboutus"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
            onClick={() => handleItemClick("aboutus")}
          >
            درباره ما
          </li>
        </Link>
        <Link to="/contact us" className={classes["nav-menu_item"]}>
          <li
            className={
              activeMenuLink === "contactus"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
            onClick={() => handleItemClick("contactus")}
          >
            ارتباط با ما
          </li>
        </Link>
        <Link to="/blogs" className={classes["nav-menu_item"]}>
          <li
            className={
              activeMenuLink === "blogs"
                ? classes["menulink-is_active"]
                : classes["nav-menu_link"]
            }
            onClick={() => handleItemClick("blogs")}
          >
            بلاگ ها
          </li>
        </Link>
       */}
      </ul>
      <div className=" sn:hidden">icon hambergery</div>
    </nav>
  );
};

export default NavBar;
