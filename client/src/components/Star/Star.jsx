import React from "react";
import { AiFillStar } from "react-icons/ai";
//import { Test } from './Rating.styles';

const Star = (rate) => {
  const stars = Array(rate.rate).fill(0);
  // const stars = [...Array(rate.rate).keys()];
  // const rating = [...Array(rate.rate).keys()].map((i) => i + 1);

  return (
    <>
      {stars.map((star, i) => {
        return <AiFillStar key={i} color="#FFDF00" />;
      })}
    </>
  );
};

export default Star;
