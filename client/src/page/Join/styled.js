import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JoinContainer = styled.div`
  width: 970px;
  height: 604px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Lucida Console';
`;


export const Text = styled.div`
  font-family: 'Lucida Console';
  font-size: 3rem;
  color: #000000;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Input = styled.input`
  width: 305px;
  height: 53px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.3rem;
  padding-left: 20px;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  }
`;