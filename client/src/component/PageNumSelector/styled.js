import styled from "styled-components";

export const GContainer = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageMoveContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.1rem solid grey;
`;

export const DropdownContainer = styled.div`
    width: 60px;
    height: 50%;
    display: flex;
    border-radius: 10px;
    border: 0.15rem solid;
    display: flex;
    position: relative;
    justify-content: flex-end;
    z-index: 2;
    &:hover {
        cursor: pointer;
    }
    overflow-y: visible;
`;

export const DropdownBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: grey;
`;

export const DropdownSelect = styled.p`
  font-weight: bold;
`;

export const DropdownMenu = styled.nav`
  display: ${(props) => (props.isActive ? `flex` : `none`)};
  width: 30px;
  padding-top: 30px;
  // background-color: blue;
  // position: absolute;
  // display: flex;
  flex-direction: column;
  align-items: center;
  // border: 2px solid #000000;
`;

export const TextContainer = styled.div`
    padding: 5px;
    font-weight: bold;
`;

export const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 50px;
  // justify-content: flex-start;
  align-items: center;

  // padding: 9px 14px;
  // border-bottom: 2px solid #d2d2d2;
  // border-left: 2px solid #d2d2d2;
  // border-right: 2px solid #d2d2d2;
  border: 2px solid #d2d2d2;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.p`
  font-weight: bold;
  align-items: center;
`;

export const PageContainer = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  padding-right: 150px;
`;
