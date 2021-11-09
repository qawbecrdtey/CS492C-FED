import React, { useState } from 'react'
import { LoginContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const Login = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const [ID, setID] = useState('')
    const writeID = e => {
        setID(e.target.value);
        console.log(ID);
    }
    const [PW, setPW] = useState('')
    const writePW = e => {
        setPW(e.target.value);
        console.log(PW);
    };
    const login = () => {

    };
    const join = () => {
        history.push('/join');
    }

    return(
         <LoginContainer>
          <Text>Login</Text>
          <Input
            placeholder="ID"
            onChange={writeID}
          />
          <Input
            placeholder="password"
            onChange={writePW}
          />
          <button onClick={login}>Sign in</button>
          <button onClick={join}>Join</button>
         </LoginContainer>
     )
 }

 export default Login;