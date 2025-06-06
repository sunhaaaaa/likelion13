import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../components/product/Product";

export default function HomePage() {
  const [ascending, setAscending] = useState(true);
  const [open, setOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("가격순");
  const [productList, setProductList] = useState([]);

  // 🔹 API에서 상품 데이터 불러오기
  useEffect(() => {
    fetch("http://localhost:3000/clothes")
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => console.error("API 호출 실패:", err));
  }, []);

  // 🔹 정렬된 배열 만들기
  const sorted = [...productList].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
  

  return (
    <Wrapper>
      <HeaderRow>
        <DropdownWrapper>
          <DropdownButton onClick={() => setOpen(!open)}>
            {sortLabel} ▾
          </DropdownButton>
          {open && (
            <DropdownMenu>
              <MenuItem
                onClick={() => {
                  setAscending(true);
                  setSortLabel("낮은 가격순");
                  setOpen(false);
                }}
              >
                낮은 가격순
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setAscending(false);
                  setSortLabel("높은 가격순");
                  setOpen(false);
                }}
              >
                높은 가격순
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

// styled-components 아래 그대로 유지
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
  width: 140px;
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
