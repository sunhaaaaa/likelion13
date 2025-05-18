import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditNamePage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(localStorage.getItem("name") || "");

  const handleSave = () => {
    if (input.trim() === "") return;
    localStorage.setItem("name", input.trim());
    navigate("/mypage");
  };

  return (
    <Form>
      <Label>이름 변경</Label>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 이름을 입력하세요"
      />
      <Button onClick={handleSave}>저장</Button>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #0077ff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export default EditNamePage;
