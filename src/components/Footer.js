import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <p>With help of Dev Ed ReactJS course</p>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  background-color: #282828;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 10rem;
  p {
    color: #a3a3a3;
    font-size: 1rem;
    padding: 0;
  }
  @media (max-width: 950px) {
    padding: 1rem 2rem;
  }
`;
