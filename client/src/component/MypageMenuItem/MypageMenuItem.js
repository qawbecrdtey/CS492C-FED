/* eslint-disable react/prop-types */
import React from 'react';
import { MenuItemActive, MenuItemNotActive } from './styled';

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