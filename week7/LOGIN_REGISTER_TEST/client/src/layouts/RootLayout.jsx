import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background: #333;
  padding: 1rem;
  color: white;
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  padding: 2rem;
`;

const RootLayout = () => (
  <div>
    <Navbar>
      <Link style={{ color: "white" }} to="/login">
        로그인
      </Link>
      <Link style={{ color: "white" }} to="/register">
        회원가입
      </Link>
    </Navbar>
    <Container>
      <Outlet />
    </Container>
  </div>
);

export default RootLayout;
