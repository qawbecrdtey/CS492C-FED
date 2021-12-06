/* eslint-disable react/prop-types */
import React from 'react';
import { MenuItemActive, MenuItemNotActive } from './styled';

/**
 * - MypageFunc의 하위 컴포넌트입니다.
 */
const MypageMenuItem = ({ menu, isActive }) => {
    return isActive === true ? (
        <MenuItemActive>
            <div>{menu.name}</div>
        </MenuItemActive>
    ) : (
        <MenuItemNotActive>
            <div>{menu.name}</div>
        </MenuItemNotActive>
    )

}

export default MypageMenuItem;