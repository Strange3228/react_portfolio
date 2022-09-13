import React from "react";
import myPhoto from "../img/my_photo.jpg";
//Styled components
import { About, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Maksym Kutasievich</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Front</span>-end dev.
            </motion.h2>
          </Hide>
          <ContactLink to="/contact" variants={fade}>
            Contact
          </ContactLink>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={myPhoto} alt="my photo" />
      </Image>
      <Wave></Wave>
    </About>
  );
};

const ContactLink = styled(Link)`
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  color: white;
  background: transparent;
  background-color: transparent;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  font-family: "Inter", sans-serif;
  margin-top: 2rem;
  @media (max-width: 1300px) {
    margin: 2rem 0rem 5rem 0rem;
  }
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

export default AboutSection;
