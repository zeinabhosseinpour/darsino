import React from "react";

// component

import Header from "../../Layout/Header";
import Filter from "./Filter";
import Hero from "./hero";
import Shopp from "./Shop";
import Footer from "../../Layout/Footer";
import Pagintion from "./pagintion";

const Shop = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Filter />
      <Shopp />
      <Pagintion />
      <Footer />
    </div>
  );
};

export default Shop;
