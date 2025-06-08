import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "../components/product/Product";

export default function HomePage() {
  const [productList, setProductList] = useState([]);
  const [sortBy, setSortBy] = useState("price_asc");
  const [sortLabel, setSortLabel] = useState("낮은 가격순");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/clothes")
      .then((res) => setProductList(res.data))
      .catch((err) => console.error("API 호출 실패:", err));
  }, []);

  const sorted = [...productList].sort((a, b) => {
    switch (sortBy) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "reviews_desc":
        return b.reviews - a.reviews;
      case "rating_desc":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Wrapper>
      <HeaderRow>
        <DropdownWrapper>
          <DropdownButton onClick={() => setOpen(!open)}>
            {sortLabel} ▾
          </DropdownButton>
          {open && (
            <DropdownMenu>
              <MenuItem onClick={() => {
                setSortBy("price_asc");
                setSortLabel("낮은 가격순");
                setOpen(false);
              }}>
                낮은 가격순
              </MenuItem>
              <MenuItem onClick={() => {
                setSortBy("price_desc");
                setSortLabel("높은 가격순");
                setOpen(false);
              }}>
                높은 가격순
              </MenuItem>
              <MenuItem onClick={() => {
                setSortBy("reviews_desc");
                setSortLabel("리뷰 많은 순");
                setOpen(false);
              }}>
                리뷰 많은 순
              </MenuItem>
              <MenuItem onClick={() => {
                setSortBy("rating_desc");
                setSortLabel("평점 높은 순");
                setOpen(false);
              }}>
                평점 높은 순
              </MenuItem>
            </DropdownMenu>
          )}
        </DropdownWrapper>
      </HeaderRow>

      <ProductGrid>
        {sorted.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ProductGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: #f6f6f6;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  background: #fff;
  border: 1px solid #ccc;
  width: 160px;
  margin-top: 8px;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.08);
  list-style: none;
  padding: 0;
  z-index: 999;
  right: 0;
`;

const MenuItem = styled.li`
  padding: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
