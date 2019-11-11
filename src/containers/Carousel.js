import React, { useState, useEffect } from "react";
import styled from "styled-components";

import data from "../config/config";
import Card from "../components/Card";

const Wrapper = styled("div")`
   width: 400px;
   overflow-x: hidden;
`;

const Slider = styled("div")`
   display: flex;
   transform: translateX(-${props => props.scrollWidth}px);
   transition: transform 0.45s;
`;

const Carousel = () => {
   const [index, setIndex] = useState(1);

   let timer = null;

   const handlePrev = () => {
      if (index === 1) setIndex(5);
      else setIndex(index - 1);
      clearTimeout(timer);
   };

   const handleNext = () => {
      if (index === data.length) setIndex(1);
      else setIndex(index + 1);
      clearTimeout(timer);
   };

   useEffect(() => {
      timer = setTimeout(handleNext, 5000);
   }, [index]);

   const cardList = data.map(item => (
      <Card key={item.id} url={item.imageUrl} />
   ));

   return (
      <Wrapper>
         <Slider scrollWidth={400 * (index - 1)}>{cardList}</Slider>
         <div onClick={handlePrev}>prev</div>
         <div onClick={handleNext}>next</div>
      </Wrapper>
   );
};

export default Carousel;
