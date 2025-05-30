import React from "react";
import { HeaderWrapper, Logo } from "./Header.styles";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate("/")}>MUSINSA</Logo>
    </HeaderWrapper>
  );
}
