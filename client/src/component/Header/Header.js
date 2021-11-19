import React from 'react';
import { Text, LogoutBtn } from './styled';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory();
    const backtoMain = () => {
        history.push('/postMain');
    }
    return (
        <><Text onClick={backtoMain}>Board</Text>
        <LogoutBtn>Logout</LogoutBtn></>
    )
}

export default Header;