import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faChevronCircleLeft,
   faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import useInput from "../hooks/useInput";

import config from "../config/config";
import Card from "../components/Card";

const Wrapper = styled("div")`
   width: 400px;
   // overflow-x: hidden;
`;

const Slider = styled("div")`
   display: flex;
   transform: translateX(-${props => props.scrollWidth}px);
   transition: transform 0.45s;
`;

const Nav = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
`;

const Title = styled("div")`
   color: #fff;
   margin: 0px 10px;
`;

let timer = null;

const Carousel = () => {
   const [data, setData] = useState(config)
   const [index, setIndex] = useState(1);
   const [input, setInput] = useInput("");



   const handlePrev = useCallback(() => {
      if (index === 1) setIndex(5);
      else setIndex(index - 1);
      clearTimeout(timer);
   }, [index]);

   const handleNext = useCallback(() => {
      if (index === data.length) setIndex(1);
      else setIndex(index + 1);
      clearTimeout(timer);
   }, [index, data.length]);

   const handleDelete = () => {
      setData(data.filter((el) => el.id !== parseInt(input)));
      setInput("");
      clearTimeout(timer);
   }

   useEffect(() => {
      timer = setTimeout(handleNext, 5000);
   }, [index, handleNext]);

   const cardList = data.map(item => (
      <Card key={item.id} url={item.imageUrl} />
   ));

   return (
      <Wrapper>
         <Slider scrollWidth={400 * (index - 1)}>{cardList}</Slider>
         <Nav>
            <FontAwesomeIcon
               icon={faChevronCircleLeft}
               color="#fff"
               size="2x"
               onClick={handlePrev}
            />
            <Title>{data[index - 1] && data[index - 1].title}</Title>
            <FontAwesomeIcon
               icon={faChevronCircleRight}
               color="#fff"
               size="2x"
               onClick={handleNext}
            />
         </Nav>
         <div>이미지 삭제</div>
         <input
            placeholder="id값을 입력해주세요."
            value={input}
            onChange={(e) => setInput(e.target.value)}
         />
         <button onClick={handleDelete}>삭제</button>
      </Wrapper>
   );
};

export default Carousel;
