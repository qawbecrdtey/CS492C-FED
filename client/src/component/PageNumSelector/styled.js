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
  justify-content: flex-start;
  border-top: 0.1rem solid grey;
`;

export const DropdownContainer = styled.div`
    width: 70px;
    height: 80%;
    display: flex;
    &:hover {
        cursor: pointer;
    }
    overflow-y: visible;
`;

export const DropdownBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.2rem solid grey;
`;

export const DropdownSelect = styled.p`
  font-weight: bold;
`;

export const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 400px;
  background-color: white;
  position: absolute;
  border: 2px solid #f4acbb;
`;

export const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 9px 14px;
  border-bottom: 2px solid #d2d2d2;
  border-top: none;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.p`
  font-weight: bold;
`;

export const PageNumSelectorContainer = styled.div`
  width: 70px;
  height: 80%;
  display: flex;
`;

export const PageContainer = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
//   background: #aa3333;
  border: 0.1rem solid grey;
`;