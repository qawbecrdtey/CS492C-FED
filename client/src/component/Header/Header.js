/* eslint-disable react/prop-types */
import React from 'react';
import { Text, HeaderContainer, Btn, BtnContainer, UserInfo } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage, userLogined } from '../../actions/actions';

/**  
 * - 마이페이지와 일반 게시물 목록 간 전환을 위해 **MyPage**버튼과 **목록으로**
     버튼이 있으며 MyPage에서는 **목록으로** 버튼이, 일반게시물 목록에서는 **MyPage**
     버튼이 노출됩니다.
 * - 로그인한 유저의 userID가 노출됩니다.
 * - Actions
 *    - Board: 버튼을 클릭하면 메인 페이지인 PostMain의 1페이지로 이동합니다. 
 *    - 목록으로: 버튼을 클릭하면 이전 페이지로 이동합니다.
 *    - MyPage: 버튼을 클릭하면 MyPage로 이동합니다.
 *    - Logout: 버튼을 클릭하면 로그인 화면으로 이동합니다. 
 */
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