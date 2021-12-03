import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
`;

export const RepliesContainer = styled.div`
    display: flex;
    border-bottom: 0.1rem solid grey;
    margin-bottom: .5em;
    margin-top: .5em;
    color: rgb(255, 120, 150);
`;

export const SubmitButton = styled.div`
    width: 20%;
    height: 52px;
    background: rgb(250, 159, 170);
    color: black;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;

`;

export const CommentListsContainer = styled.div`
    width: 80vw;
    word-break: break-all;
`;
