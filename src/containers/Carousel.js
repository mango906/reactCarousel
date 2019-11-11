import React from "react";
import data from "../config/config";
import Card from "../components/Card";

const Carousel = () => {
   console.log(data);

   const cardList = data.map(item => (
      <Card key={item.id} url={item.imageUrl} />
   ));

   return <div>{cardList}</div>;
};

export default Carousel;
