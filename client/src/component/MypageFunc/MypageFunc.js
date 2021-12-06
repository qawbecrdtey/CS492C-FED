/* eslint-disable react/prop-types */
import React from 'react';
import { MypageFuncContainer } from './styled';
import { useLocation, Link } from 'react-router-dom';
import MypageMenuItem from '../MypageMenuItem';

/**
 * - 마이페이지의 세가지 페이지(내가 쓴 글, 내가 좋아요 누른 글, 내가 쓴 댓글)를 
   선택할 수 있게 해주는 컴포넌트입니다.   
 * - state를 사용하여 선택한 부분만 진한 글씨로 노출됩니다.
 */
const MypageFunc = ({ onClickMenu }) => {

    const pathName = useLocation().pathname;

    const menus = [
        { name: '내가 쓴 글', path: '/myPage/myPosts/1', type: 'myPosts'},
        { name: '내가 좋아요 누른 글', path: '/myPage/myLikes/1', type: 'myLikes'},
        { name: '내가 쓴 댓글', path: '/myPage/myComments/1', type: 'myComments'},
    ];
    return (
        <MypageFuncContainer>
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index} onClick={onClickMenu}>
                        <MypageMenuItem
                            menu={menu}
                            isActive={pathName.includes(menu.type) ? true : false}
                        /> 
                    </Link>
                )
            })}
        </MypageFuncContainer>
    )
}

export default MypageFunc;
