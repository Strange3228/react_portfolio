import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
//Icons
import mail from "../img/skills_icons/envelope-solid.svg";
import github from "../img/skills_icons/github.svg";
import linkedin from "../img/skills_icons/linkedin.svg";
import phoneImg from "../img/skills_icons/phone.svg";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>My Social Medias</motion.h2>
        </Hide>
      </Title>
      <div className="">
        <Hide>
          <Social variants={titleAnim}>
            <Icon src={mail} />
            <a href="mailto:maksym.kutasevich@gmail.com">Send Me A Message.</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Icon src={linkedin} />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/maksym-kutasievych-291a94180/"
            >
              Me on LinkedIn
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Icon src={github} />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Strange3228"
            >
              Me on GitHub
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Icon src={phoneImg} />
            <a href="tel:+48732691790">+48 732 691 790</a>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Icon = styled.img`
  width: 4rem;
  height: auto;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    margin: 2rem;
    font-weight: lighter;
    font-size: 4rem;
    color: #353535;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
`;

export default ContactUs;
