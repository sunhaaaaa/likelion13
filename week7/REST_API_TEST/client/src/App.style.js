import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 1.25rem;
  color: #2c3e50;
`;

export const Heading2 = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4f5b66;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.75rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px #3498db;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px #3498db;
  }
`;

export const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.75rem;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ErrorMsg = styled.p`
  color: #e74c3c;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LoadingMsg = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  color: #888;
`;

export const NoPostsMsg = styled.p`
  text-align: center;
  color: #777;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PostItem = styled.li`
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #34495e;
`;

export const PostContent = styled.p`
  margin: 0 0 1rem 0;
  white-space: pre-wrap;
  color: #555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const btnCommon = `
  padding: 0.4rem 0.8rem;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: white;
`;

export const EditButton = styled.button`
  ${btnCommon}
  background-color: #27ae60;

  &:hover {
    background-color: #1e8449;
  }
`;

export const PatchButton = styled.button`
  ${btnCommon}
  background-color: #f39c12;

  &:hover {
    background-color: #d68910;
  }
`;

export const DeleteButton = styled.button`
  ${btnCommon}
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;
