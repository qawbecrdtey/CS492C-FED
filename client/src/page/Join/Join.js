/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, JoinContainer, Text, Input } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, getAllUser } from '../../actions/actions';

/**
 * - page 항목에 포함된 컴포넌트입니다.
 * - userID, password, email, age, phoneNum 정보를 입력하고 
     register버튼을 누르면 서버로 정보를 전송하여 등록되게 합니다.
 * - userID가 15글자를 초과하는 경우, 서버의 userList에 userID와 중복된 값이 있는
     경우, 정보 중 하나라도 비어 있는 경우 등록이 되지 않고 경고창이 노출됩니다.
 */
const Join = ({ isStory, onRegister }) => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const _userList = useSelector(state => state.user.userList);
    console.log(_userList.length)
    const [ID, setID] = useState('')
    const writeID = e => {
        setID(e.target.value);
    }
    const [PW, setPW] = useState('')
    const writePW = e => {
        setPW(e.target.value);
    };
    const [Email, setEmail] = useState('')
    const writeEmail = e => {
        setEmail(e.target.value);
    };
    const [Age, setAge] = useState('')
    const writeAge = e => {
        setAge(e.target.value);
    };
    const [PhoneNum, setPhoneNum] = useState('')
    const writePhoneNum = e => {
        setPhoneNum(e.target.value);
    };
    
    const register = () => {
        if (ID.length > 15) {
          alert("ID가 최대길이를 초과했습니다");
          return;
        }

        let body = {
            userID: ID,
            password: PW,
            email: Email,
            age: Age,
            phoneNum: PhoneNum
          };
        var isinlist = false;

        for (var key in body) { 
          if (body[key] === '') {
            alert("정보를 채워주세요");
            return;
          }
        }

        _userList.forEach(user => {
          if (user[1] === ID) {
            alert("이미 존재하는 ID입니다");
            history.push('/join');
            isinlist = true;
            return;
          }
        });

        if (!isinlist) {
          dispatch(registerUser(body));
          console.log(body);
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
          <Input
            placeholder="email"
            type="email"
            onChange={writeEmail}
          />
          <Input
            placeholder="age"
            onChange={writeAge}
          />
          <Input
            placeholder="phone numeber"
            onChange={writePhoneNum}
          />
          {isStory ? <button onClick={onRegister}>Register</button>
          : <button onClick={register}>Register</button>}
         </JoinContainer>
        </Container>
     )
 }

 export default Join;
