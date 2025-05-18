import { Link } from "react-router-dom";
import styled from "styled-components";

const MyPage = () => {
  const name = localStorage.getItem("name") || "홍길동";

  return (
    <Container>
      <Profile src="https://placehold.co/100x100" alt="프로필" />
      <Text>{name} 님, 안녕하세요!</Text>
      <StyledLink to="edit">이름 변경하기</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Text = styled.span`
  font-size: 1.25rem;
`;

const StyledLink = styled(Link)`
  margin-top: 12px;
  text-decoration: none;
  color: #0077ff;
  font-weight: 500;
`;

export default MyPage;
