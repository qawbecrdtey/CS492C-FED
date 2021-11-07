import React, { useState } from 'react'
import { Container, JoinContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/actions';

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
    const register = () => {
        let body = {
            userID: ID,
            password: PW
          };
        dispatch(registerUser(body));
        history.push('./postMain');
    }

    return(
        <Container>
         <JoinContainer>
          <Text>Join</Text>
          <Input
            placeholder="ID"
            onChange={writeID}
          />
          <Input
            placeholder="password"
            onChange={writePW}
          />
          <button onClick={register}>Register</button>
         </JoinContainer>
        </Container>
     )
 }

 export default Login;