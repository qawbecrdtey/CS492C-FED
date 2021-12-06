/* eslint-disable react/prop-types */
import React from 'react';
import { Text, HeaderContainer, Btn, BtnContainer, UserInfo } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage, userLogined } from '../../actions/actions';

const Header = ({ isStory, onClickBoard, onClickPostList, onClickMyPage, onClickLogout}) => {
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
            {isStory? <Text onClick={onClickBoard}>Board</Text> :
            <Text onClick={backtoMain}>Board</Text>}
            <BtnContainer>
                {window.location.href.includes('postMain') ? null : 
                    isStory ? <Btn onClick={onClickPostList}>목록으로</Btn> : 
                    <Btn onClick={backtoMain}>목록으로</Btn>}
                {isStory ? <Btn onClick={onClickMyPage}>MyPage</Btn> : 
                <Btn onClick={goMyPage}>MyPage</Btn>}
                {isStory ? <Btn onClick={onClickLogout}>Logout</Btn> :
                <Btn onClick={logout}>Logout</Btn>}
                <UserInfo>{_loginUser.userID}</UserInfo>
            </BtnContainer>
        </HeaderContainer>
    )
}

export default Header;