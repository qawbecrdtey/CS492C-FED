import styled from 'styled-components';

export const Text = styled.div`
    display: flex;
    font-family: 'Noto Sans';
    font-size: 2.2rem;
    color: #000000;
    font-weight: bold;
    padding-left: 20px;
    cursor:pointer;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid grey;
`;

export const Btn = styled.button`
    width: 60px;
    height: 30px;
    display: flex;
    background: pink;
    margin: 5px;
    box-shadow: 3px 3px 3px grey;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 0.8rem;
    &:active{
    left: 3px;
    top: 3px;
    box-shadow: none;
    }
    border: none;
`;

export const UserInfo = styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    margin: 5px;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
`;

export const BtnContainer = styled.button`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: none;
    border: none;
    justify-content: flex-end;
    align-items: center;
`;