import React, { useEffect, useState } from 'react'
import { Container, JoinContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, getAllUser, modifyUser } from '../../actions/actions';

const Join = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const _userList = useSelector(state => state.user.userList);

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
        var isinlist = false;
        _userList.forEach(user => {
          if (user[1] === ID) {
            dispatch(modifyUser(body));
            history.push('/');
            isinlist = true;
            return;
          }
        });

        if (!isinlist) {
          dispatch(registerUser(body));
          history.push('/');
        }
    }
    useEffect(() => {
      dispatch(getAllUser());
    },[]);

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
            type="password"
            onChange={writePW}
          />
          <button onClick={register}>Register</button>
         </JoinContainer>
        </Container>
     )
 }

 export default Join;