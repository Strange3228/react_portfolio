import React from "react";
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  pageAnimation,
  slider,
  slideFromBottom,
} from "../animation";
import { MovieState } from "../movieState";
import { v4 as uuidv4 } from "uuid";
import MovieComponent from "../components/Movie";

const OurWork = () => {
  const movies = MovieState();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <ToolTip variants={slideFromBottom}>
        Click on image to see details
      </ToolTip>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {movies.map((movie, index) => {
        return (
          <MovieComponent
            key={uuidv4()}
            title={movie.title}
            mainImg={movie.mainImg}
            url={movie.url}
            index={index}
          />
        );
      })}
    </Work>
  );
};
const ToolTip = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  background: #23d997;
  color: white;
  z-index: 10;
  text-align: center;
`;
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
