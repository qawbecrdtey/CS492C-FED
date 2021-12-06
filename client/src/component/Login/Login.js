/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { LoginContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, setPostPerPage, updateCurrentPage, userLogined } from '../../actions/actions';

/**
 * - userID와 password를 입력한 후 로그인 버튼을 눌러서 로그인합니다.
 * - 서버에서 userList를 불러와서 사용자가 입력한 userID와 password가 
 *   일치하는 정보가 있을 경우 로그인되게 합니다.
 * - 로그인이 성공한 경우 postMain 페이지로 이동합니다.
 * - register버튼을 누르면 가입 페이지(Join 컴포넌트)로 이동합니다.
 * - Actions
 *    - Sign in: userID와 password를 입력한 후 버튼을 클릭하면 userID와 password가 
 *      일치하는 정보가 있을 경우 로그인되게 합니다.
 *    - Join: register버튼을 누르면 가입 페이지(Join 컴포넌트)로 이동합니다.
 */
const Login = ({ onSignin, onJoin, isStory }) => {
    const _userList = useSelector(state => state.user.userList);
    const history = useHistory();
    const dispatch = useDispatch();
    const [ID, setID] = useState('')
    const writeID = e => {
        setID(e.target.value);
    }
    console.log(_userList);
    const [PW, setPW] = useState('')
    const writePW = e => {
        setPW(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllUser());
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
          {isStory ? <button onClick={onSignin} >Sign in</button> :
          <button onClick={login} >Sign in</button>}
          {isStory ? <button onClick={onJoin} onChange={onJoin}>Join</button> : 
          <button onClick={join} onChange={onJoin}>Join</button>}
         </LoginContainer>
     )
 }

 export default Login;