import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(Link)`
  color: #a7a7a7;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  padding-bottom: 4px;
  position: relative;

  &.active {
    color: #000;
    font-weight: 700;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #ff5c8a;  /* 분홍색 밑줄 */
    border-radius: 2px;
  }
`;
