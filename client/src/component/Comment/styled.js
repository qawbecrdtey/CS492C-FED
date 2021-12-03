import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 84vw;
    display: flex;
    flex-direction: column;
    margin: 4px;
    padding: 4px;
`;

export const RepliesContainer = styled.div`
    width: 84vw;
    display: flex;
    border-bottom: 0.1rem solid grey;
    margin-bottom: .5em;
    color: rgb(255, 120, 150);
`;

export const SubmitButton = styled.div`
    width: 84vw;
    border-radious: 10px;
    background: rgb(250, 159, 170);
    color: black;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`;

export const CommentListsContainer = styled.div`
    width: 84vw;
    word-break: break-all;
`;
