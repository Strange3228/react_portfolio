import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 950px) {
    flex-direction: column-reverse;
    padding: 2rem 2rem;
    text-align: center;
    min-height: unset;
    margin-bottom: 3rem;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  button {
    margin-top: 2rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  border-radius: 10px;
  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
  @media (max-width: 950px) {
    width: 100%;
    flex: unset;
    margin-bottom: 3rem;
    img {
      width: auto;
      height: auto;
      max-height: 300px;
      max-width: 90%;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
