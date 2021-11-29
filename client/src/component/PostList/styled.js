import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const FunctionContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid grey;
`;

export const SearchContainer = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    // align-items: center;
    justify-content: center;
    // border: solid;
    // background: #cccccc;
`;

export const SearchTextContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding-top: 9px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.3rem;
  padding-left: 20px;
  margin-top: 5px;
  margin-left: 10px;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const DropDownMenu = styled.div`
  width: 15%;
  height: auto;
  display: flex;
  position: relative;
  top: 5px;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 20px;
  margin-right: 20px;
  overflow: visible;
  z-index: 0;
`;

export const DropDownBody = styled.div`
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

export const DropDownContent = styled.div`
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

export const QueryElementTextContainer = styled.div`
  width: 80%;
  heigh: 100%;
  margin-top: 5px;
  font-weight: normal;
  text-align: center;
  font-size: 18px;
  padding-bottom: 3px;
  padding-right: 10px;
`;

export const SearchButton = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  background: skyblue;
  margin: 5px;
  box-shadow: 3px 3px 3px grey;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  &:active{
    left: 3px;
    top: 3px;
    box-shadow: none;
  }
`;