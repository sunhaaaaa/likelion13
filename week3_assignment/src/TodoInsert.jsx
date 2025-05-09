import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 0 15px;
  font-size: 16px;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onInsert(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">추가</Button>
    </Form>
  );
}

export default TodoInsert;
