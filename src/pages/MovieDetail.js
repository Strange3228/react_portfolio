import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const movies = MovieState();
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    if (currentMovie[0]) setMovie(currentMovie[0]);
  }, [url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <a target="_blank" rel="noreferrer" href={movie.link}>
              {movie.link}
            </a>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.descriptions.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="Movie secondary" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  padding-top: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  a {
    display: flex;
    margin: 0 auto;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    color: white;
    background: transparent;
    background-color: transparent;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    margin-bottom: 2rem;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 40vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 0;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
