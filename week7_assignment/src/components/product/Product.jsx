import React from "react";
import {
  Card,
  Img,
  Info,
  Brand,
  Name,
  Price,
  RatingText
} from "./Product.styles";

export default function Product({ brand, name, price, image, rating, reviews }) {
  return (
    <Card>
      <Img src={image} alt={name} />
      <Info>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>{price}원</Price>
        <RatingText>⭐ {rating}점 ({reviews}명 리뷰)</RatingText>
      </Info>
    </Card>
  );
}
