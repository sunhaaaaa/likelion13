import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Title>Top 10</Title>
      <ProductList>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
