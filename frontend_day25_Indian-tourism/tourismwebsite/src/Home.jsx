import React from "react";
import Common from "../src/Common";
import web from "../src/images/culture1.jpeg";

const Home = () => {
  return (
    <>
      <Common
        name="Proud of my country India"
        img={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
