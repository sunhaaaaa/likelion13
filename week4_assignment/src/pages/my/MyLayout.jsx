import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MyLayout = () => {
  return (
    <Wrapper>
      <Title>내 계정</Title>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export default MyLayout;
