import styled from 'styled-components';

export const SingleCommentContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    border-radius: 10px;
    // flex-direction: row;
    border-bottom: 0.1rem solid grey;
    margin: 5px;
    background: rgba(255, 159, 180, 0.4);
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: auto;
    flex-direction: row;
    // background: #dddddd;
`;

export const WriterContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    // background: #dd00dd;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const ContentContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    // background: #6b6bff;
`;

export const HoverContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  
  &:hover > .profilecard,
  &:active > .profilecard {
    display: block;
  }
`;

export const HoverContent = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
  border-radius: 4px;
  border: 0.2rem solid grey;
  background-color: white;
  padding: 4px;
  height: 80px;
  width: 200px;
`;

export const ProfileContent = styled.div`
  display: flex;
`;

