import React from 'react';
import { MypageFuncContainer } from './styled';
import { useLocation, Link } from 'react-router-dom';
import MypageMenuItem from '../MypageMenuItem';

const MypageFunc = () => {

    const pathName = useLocation().pathname;

    const menus = [
        { name: '내가 쓴 글', path: '/myPage/myPosts'},
        { name: '내가 좋아요 누른 글', path: '/myPage/myLikes'},
        { name: '내가 쓴 댓글', path: '/myPage/myComments'},
    ];
    return (
        <MypageFuncContainer>
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <MypageMenuItem
                            menu={menu}
                            isActive={pathName === menu.path ? true : false}
                        /> 
                    </Link>
                )
            })}
        </MypageFuncContainer>
    )
}

export default MypageFunc;