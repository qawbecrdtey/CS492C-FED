import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    overflow-y: scroll;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const PostHeaderContainer = styled.div`
    width: 100vw;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleContainer = styled.div`
    width: 80vw; 
    height: 50%;
    display: flex;
    font-size: 2rem;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const UnderTitleContainer = styled.div`
    width: 80vw;
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

export const ContentOutContainer = styled.div`
    width: 80vw;
    height: 60%;
    min-height: 400px;
    // display: flex;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    word-break: break-all;
    border-top: 0.1rem solid grey;
`;

export const ContentContainer = styled.div`
    padding: 8px;
`;

export const CommentContainer = styled.div`
    width: 80vw;
    height: 27%;
    overflow-y: visible;
    border-top: 0.1rem solid grey;
`;

export const InputContainer = styled.input`
    display: flex;
    width: 50vw;
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
    width: 80vw;
    height: 5%;
    display: flex;
    flex-direction: row;
    jusfify-content: flex-start;
    border-top: 0.1rem solid grey;
    padding-top: 4px;
    padding-bottom: 4px;
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
    margin-left: 4px;
    margin-right:4px;
    ${({ active }) =>
    active && `opacity: 1;`}
`;