import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

export const IntroSection = styled.div`
  text-align: left;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #1c1c1c;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 10px;
  line-height: 1.6;
`;

export const Button = styled.button`
  margin-top: 20px;
  background: #00c851;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const Canvas = styled.div`
  position: relative;
  width: 100%;
  height: 1200px;
`;

export const Note = styled.div`
  position: absolute;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  font-size: 18px;
  font-weight: bold;
`;

export const ImageCard = styled.img`
  position: absolute;
  width: 320px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;
