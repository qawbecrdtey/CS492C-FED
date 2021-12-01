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
  align-items: flex-end;
  justify-content: center;
  border-top: 0.1rem solid grey;
`;

export const DropdownContainer = styled.div`
  width: 60px;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 20px;
  margin-right: 20px;
  overflow: visible;
  z-index: 0;
  &:hover {
      cursor: pointer;
  }
`;

export const DropdownBody = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const DropdownMenu = styled.div`
  width: 80%;
  height: 150px;
  display: ${(props) => (props.isActive ? `flex` : `none`)};
  border: 0.1rem solid grey;
  margin-right: 5px;
  z-index: 2;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  align-items: center;
`;

export const TextContainer = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const DropdownItemContainer = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  border-bottom: 0.1rem solid grey;
  align-items: center;
  justify-content: center;
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.div`
  width: 80%;
  heigh: 100%;
  margin-top: 5px;
  font-weight: normal;
  text-align: center;
  font-size: 18px;
  padding-bottom: 3px;
  padding-right: 10px;
`;

export const PageContainer = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  padding-right: 150px;
`;
