import React from 'react';
import { Text, LogoutBtn, HeaderContainer, Btn } from './styled';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory();
    const backtoMain = () => {
        history.push('/postMain');
    }
    const goMyPage = () => {
        history.push('/myPage/myPosts');
    }
    return (
        <HeaderContainer>
            <Text onClick={backtoMain}>Board</Text>
            <Btn onClick={goMyPage}>MyPage</Btn>
            <Btn onClick={backtoMain}>목록으로</Btn>
            <LogoutBtn>Logout</LogoutBtn>
        </HeaderContainer>
    )
}

export default Header;