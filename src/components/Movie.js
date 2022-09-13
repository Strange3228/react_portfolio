import React from "react";
import { useScroll } from "./useScroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  lineAnim,
  swoopAdoop,
  firstMovieAnim,
} from "../animation";
import { Link } from "react-router-dom";

const MovieComponent = ({ title, mainImg, url, index }) => {
  const [element, controls] = useScroll();
  return (
    <Movie
      ref={element}
      variants={index > 0 ? swoopAdoop : firstMovieAnim}
      animate={controls}
      initial="hidden"
    >
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={url}>
        <Hide>
          <motion.img variants={photoAnim} src={mainImg} alt="athlete" />
        </Hide>
      </Link>
    </Movie>
  );
};

const Movie = styled(motion.div)`
  margin-bottom: 5rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 650px;
    max-height: 650px;
    object-fit: cover;
  }
  h2 {
    white-space: nowrap;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default MovieComponent;
