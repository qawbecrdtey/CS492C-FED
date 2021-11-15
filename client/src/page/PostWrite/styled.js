import styled from 'styled-components';

export const EditorContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    background: #aaaaaa;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    background: #bba991;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.input`
    display: flex;
    width: 50%;
    height: 5%;
    background-color: #ffffff;
    border: transparent;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
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
