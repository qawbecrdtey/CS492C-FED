import styled from "styled-components";

export const TriangleContainer = styled.div`
  width: 10px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid grey;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  margin: 1px;
`;

export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-bottom: 6px solid grey;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  margin: 1px;
`;
