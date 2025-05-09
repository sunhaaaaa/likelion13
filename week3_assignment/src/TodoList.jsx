import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #ffffff;
  margin-bottom: 8px;
  border-radius: 6px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span`
  font-size: 16px;
`;

const Button = styled.button`
  background: #e91e63;
  border: none;
  color: white;
`;

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <List>
      {todos.map((todo) => (
        <Item key={todo.id}>
          <Left>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => onToggle(todo.id)}
            />
            <Text checked={todo.checked}>{todo.text}</Text>
          </Left>
          <Button onClick={() => onRemove(todo.id)}>삭제</Button>
        </Item>
      ))}
    </List>
  );
}

export default TodoList;
