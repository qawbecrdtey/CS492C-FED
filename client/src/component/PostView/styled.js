import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
`;

export const PostHeaderContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    border-top: 0.1rem solid grey;
`;

export const TitleContainer = styled.div`
    width: 100%; 
    height: 50%;
    display: flex;
    font-size: 2rem;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
`;

export const UnderTitleContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    border-top: 0.1rem solid grey;
`;

export const InfoContainer = styled.div`
    font-size: 1rem;
    padding: 20px;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    border-top: 0.1rem solid grey;
`;

export const CommentContainer = styled.div`
    width: 100%;
    height: 27%;
    overflow-y: visible;
    border-top: 0.1rem solid grey;
`;