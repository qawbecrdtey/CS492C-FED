import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow-y: scroll;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const PostHeaderContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 0.1rem solid grey;
`;

export const TitleContainer = styled.div`
    width: 80%; 
    height: 50%;
    display: flex;
    font-size: 2rem;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
`;

export const UnderTitleContainer = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    border-top: 0.1rem solid grey;
`;

export const InfoContainer = styled.div`
    font-size: 1rem;
    padding: 8px;
`;

export const ContentContainer = styled.div`
    width: 80%;
    height: 60%;
    // display: flex;
    justify-content: center;
    border-top: 0.1rem solid grey;
    align-content: stretch;
    align-items: stretch;
`;

export const CommentContainer = styled.div`
    width: 100%;
    height: 27%;
    overflow-y: visible;
    border-top: 0.1rem solid grey;
`;

export const InputContainer = styled.input`
    display: flex;
    width: 50%;
    height: 80%;
    margin-top: 5px;
    margin-bottom: 5px;
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

export const ReactContainer = styled.div`
    width: 80%;
    height: 5%;
    display: flex;
    flex-direction: row;
    jusfify-content: flex-start;
    border-top: 0.1rem solid grey;
`;

export const LikeButton = styled.button`
    background-color: rgb(252, 156, 175);
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-size: 1rem;
    border: 0.1rem solid grey;
    border-radius: 20%;
    opacity: 0.4
    ${({ active }) =>
    active && `opacity: 1;`}
`;