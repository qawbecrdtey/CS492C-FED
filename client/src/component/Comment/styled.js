import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    // background: #aaaaaa;
    flex-direction: column;
`;

export const RepliesContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    border-bottom: 0.1rem solid grey;
    color: rgb(255, 120, 150);
`;

export const SubmitButton = styled.div`
    width: 10%;
    height: 50px;
    border-radious: 10px;
    background: rgb(250, 159, 170);
    color: black;
    justify-content: center;
    align-items: center;
    display: flex;
`;