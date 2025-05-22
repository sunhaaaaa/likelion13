import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 100px;
  background: #ffffff;
`;

export const TitleSection = styled.div`
  text-align: left;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #1c1c1c;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  line-height: 1.6;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  gap: 40px;
`;

export const ProjectCard = styled.div`
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
