import React from "react";
import home1 from "../img/home1.png";
//Styled components
import { About, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
          <p className="">
            Contact us for any photography ideas that you have. We have
            proffesionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </motion.div>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
