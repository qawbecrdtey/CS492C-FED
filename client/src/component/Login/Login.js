import React, { useEffect, useState } from 'react'
import { LoginContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, setPostPerPage, updateCurrentPage, userLogined } from '../../actions/actions';

const Login = () => {
    const _userList = useSelector(state => state.user.userList);
    const state = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [ID, setID] = useState('')
    const writeID = e => {
        setID(e.target.value);
    }
    const [PW, setPW] = useState('')
    const writePW = e => {
        setPW(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllUser());
        console.log(state);
    },[]);
    const login = () => {
        var isinlist = false;
        _userList.forEach(user => {
        if (user[1] === ID & user[2] === PW) {
            dispatch(userLogined({
                userID: ID,
                password: PW,
            }));
            dispatch(updateCurrentPage(1));
            dispatch(setPostPerPage(20));
            history.push('./postMain/1');
            isinlist = true;
            return;
        }
        });

        if (!isinlist) {
            setID('');
            setPW('');
            alert("wrong information");
        }
        console.log(_userList);
    };
    const join = () => {
        history.push('/Join');
    }

    return(
         <LoginContainer>
          <Text>Login</Text>
          <Input
            placeholder="ID"
            onChange={writeID}
            value={ID}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={writePW}
            value={PW}
          />
          <button onClick={login}>Sign in</button>
          <button onClick={join}>Join</button>
         </LoginContainer>
     )
 }

 export default Login;