import React from 'react';
import { Text, HeaderContainer, Btn, BtnContainer, UserInfo } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage, userLogined } from '../../actions/actions';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const _loginUser = useSelector(state => state.user.loginUser);
    const backtoMain = () => {
        dispatch(updateCurrentPage(1));
        window.location.replace('/postMain/1');
    }
    const goMyPage = () => {
        dispatch(updateCurrentPage(1));
        history.push('/myPage/myPosts/1');
    }
    const logout = () => {
        dispatch(userLogined({}));
        history.push('/');
    }
    return (
        <HeaderContainer>
            <Text onClick={backtoMain}>Board</Text>
            <BtnContainer>
                {window.location.href.includes('postMain') ? null : <Btn onClick={backtoMain}>목록으로</Btn>}
                <Btn onClick={goMyPage}>MyPage</Btn>
                <Btn onClick={logout}>Logout</Btn>
                <UserInfo>{_loginUser.userID}</UserInfo>
            </BtnContainer>
        </HeaderContainer>
    )
}

export default Header;