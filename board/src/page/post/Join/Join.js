import React, { useState } from 'react'
import { Container, JoinContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/actions';

const Join = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();

    const [ID, setID] = useState('')
    const writeID = e => {
        setID(e.target.value);
    }
    const [PW, setPW] = useState('')
    const writePW = e => {
        setPW(e.target.value);
    };
    const register = () => {
        let body = {
            userID: ID,
            password: PW
          };
        dispatch(registerUser(body));
        history.push('./');
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

 export default Join;