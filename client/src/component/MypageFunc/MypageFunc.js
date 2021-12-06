/* eslint-disable react/prop-types */
import React from 'react';
import { MypageFuncContainer } from './styled';
import { useLocation, Link } from 'react-router-dom';
import MypageMenuItem from '../MypageMenuItem';

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
