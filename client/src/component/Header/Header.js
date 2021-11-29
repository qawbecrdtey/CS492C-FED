import React from 'react';
import { Text, LogoutBtn, HeaderContainer, Btn } from './styled';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { userLogined } from '../../actions/actions';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const backtoMain = () => {
        window.location.replace('/postMain/1');
    }
    const goMyPage = () => {
        history.push('/myPage/myPosts');
    }
    const logout = () => {
        dispatch(userLogined({}));
        history.push('/');
    }
    return (
        <HeaderContainer>
            <Text onClick={backtoMain}>Board</Text>
            <Btn onClick={backtoMain}>목록으로</Btn>
            <Btn onClick={goMyPage}>MyPage</Btn>
            <LogoutBtn onClick={logout}>Logout</LogoutBtn>
        </HeaderContainer>
    )
}

export default Header;