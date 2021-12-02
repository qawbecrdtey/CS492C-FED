import styled from "styled-components";

export const Btn = styled.button`
    width: 60px;
    height: 30px;
    display: flex;
    background: skyblue;
    margin: 5px;
    box-shadow: 3px 3px 3px grey;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 0.6rem;
    &:active{
      left: 3px;
      top: 3px;
      box-shadow: none;
    }
`;

export const FunctionContainer = styled.div`
  width: 15%;
  height: 50px;
  display: flex;
  // flex-direction: row;
  align-items: center;
  justify-content: space-around;
  // border-bottom: 0.1rem solid grey;
`;