import React from "react";
import web from "./images/yoga1.jpeg";
import Common from "../src/Common";

const About = () => {
  return (
    <>
      <Common
        name="Proud of my country India"
        img={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
