import React from "react";
import {
  Card,
  Img,
  Info,
  Brand,
  Name,
  Price,
  WatchText
} from "./Product.styles";

export default function Product({ brand, name, price, image, watch }) {
  return (
    <Card>
      <Img src={image} alt={name} />
      <Info>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>{price}원</Price>
        <WatchText>{watch}명이 보는 중</WatchText>
      </Info>
    </Card>
  );
}
