import styled from "styled-components";

export const Card = styled.div`
  width: 240px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
`;

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 10px;
`;

export const Brand = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 2px;
`;

export const Name = styled.h4`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #333;
`;

export const WatchText = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;
