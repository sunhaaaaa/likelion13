import styled from "styled-components";

export default function ProductCard({ name, price, image }) {
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price.toLocaleString()}원</ProductPrice>
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  width: 240px;
  margin: 12px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0 5px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;