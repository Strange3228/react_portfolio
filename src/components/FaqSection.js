import React from "react";
//Styled components
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      ref={element}
      animate={controls}
      variants={scrollReveal}
      initial="hidden"
    >
      <h2>
        My <span>Experience</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Trainee - HugeTech (2020)">
          <div className="answer">
            <p>240 hours of practice.</p>
            <p>
              Started to learn HTML, CSS and JavaScript. Started to do some
              simple one-pages on Wordpress.
            </p>
          </div>
        </Toggle>
        <Toggle title="Trainee - RoxArt (2021)">
          <div className="answer">
            <p>240 hours of practice as a front-end developer.</p>
            <p>
              My duties were - creating pages according to the provided design
              in Figma; making the changes provided by the client on existed
              pages.
            </p>
          </div>
        </Toggle>
        <Toggle title="Attempt to run own business (May 2021 - January 2022)">
          <div className="answer">
            <p>Attempt to run my own business with a set of 3 employees.</p>
            <p>
              My duties were: communicating with the client during the creation
              of online stores, front-end development, helping with work with
              WordPress. Unfortunately, the cooperation was not successful.
            </p>
          </div>
        </Toggle>
        <Toggle title="WordPress developer - WeBase.Global (January 2022 - August 2022)">
          <div className="answer">
            <p>Full-time work as wordpress developer</p>
            <p>
              My duties included a very wide area of work: making changes for
              live sites; creating websites and stores on WordPress; adding
              additional functionalities to live sites.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
