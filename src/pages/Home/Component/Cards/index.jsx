import React from "react";
import { Link } from "react-router-dom";

// components
import Tests from "./Tests";
import Consolt from "./Consolt";
import Shop from "./Shop";
import Samples from "./Samples";
import Videos from "./Videos";

const Cards = () => {
  return (
    <div className="flex flex-col gap-2">
      <Shop />
      <Consolt />
      <Tests />
      <Samples />
      <Videos />
    </div>
  );
};

export default Cards;
