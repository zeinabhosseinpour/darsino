import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

import Cards from "./Component/Cards";
import Hero from "./Component/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
