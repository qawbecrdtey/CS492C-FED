import styled from 'styled-components';

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