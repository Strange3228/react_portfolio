import React from "react";
//import icons
import bootstrap from "../img/skills_icons/bootstrap.svg";
import check from "../img/skills_icons/check-solid.svg";
import css3 from "../img/skills_icons/css3.svg";
import html5 from "../img/skills_icons/html5.svg";
import js from "../img/skills_icons/js.svg";
import php from "../img/skills_icons/php.svg";
import reactIcon from "../img/skills_icons/react.svg";
import sass from "../img/skills_icons/sass.svg";
import wordpress from "../img/skills_icons/wordpress.svg";
//Styles
import { Description } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          My <span>skills</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={html5} alt="" />
              <h3>HTML</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={css3} alt="" />
              <h3>CSS</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={js} alt="" />
              <h3>JavaScript</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={sass} alt="" />
              <h3>SCSS</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={bootstrap} alt="" />
              <h3>Bootstrap</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={check} alt="" />
              <h3>Bulma</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={check} alt="" />
              <h3>JQuery</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={php} alt="" />
              <h3>PHP</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={wordpress} alt="" />
              <h3>WordPress</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={check} alt="" />
              <h3>Woocommerce</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={reactIcon} alt="" />
              <h3>The basics of REACT</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={check} alt="" />
              <h3>The basics of SQL</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={check} alt="" />
              <h3>Experience in working with various WP plugins</h3>
            </div>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 950px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  p {
    width: 70%;
    padding-top: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 4rem;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
    column-gap: 2rem;
    row-gap: 2rem;
  }
`;
const Card = styled.div`
  flex: 1;
  min-width: 20%;
  max-width: 35%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    min-width: 40%;
    max-width: 45%;
  }
  @media (max-width: 500px) {
    min-width: 100%;
    max-width: 100%;
  }
  .icon {
    display: flex;
    align-items: center;
    width: 100%;
    img {
      width: 3rem;
      height: auto;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      padding: 1rem;
      color: black;
      flex: 1;
      text-align: center;
    }
  }
`;

export default ServicesSection;
