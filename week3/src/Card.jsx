import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  background: ${(props) => props.background || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

const Button = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${(props) => props.background || "gray"};
  color: ${(props) => props.color || "white"};
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#555"};
  }
`;

function App() {
  return (
    <Container>
      {/* 강조 스타일 카드 */}
      <Card background="skyblue" textColor="white">
        <h2>강조 카드</h2>
        <p>강조 스타일이 적용된 카드입니다.</p>
        <Button background="blue" hoverColor="#004494">강조 버튼</Button>
      </Card>

      {/* 기본 카드 */}
      <Card>
        <h2>기본 카드</h2>
        <p>기본 스타일이 적용된 카드입니다.</p>
        <Button>기본 버튼</Button>
      </Card>
    </Container>
  );
}

export default App;
