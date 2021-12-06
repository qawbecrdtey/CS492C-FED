/* eslint-disable react/prop-types */
import React from 'react'
import { Container} from './styled';
import Login from '../../component/Login'


/**
 * - Login 컴포넌트를 하위 컴포넌트로 가집니다.
 * - Actions 
 *      - Sign in : 아이디와 비밀번호를 입력 후 sign in 을 누르면 해당 정보에 대응되는 정보가 DB에 있을 경우 로그인됩니다.
 *                  로그인에 실패할 경우 경고창이 뜹니다.
 *      - Join : 가입 화면으로 이동합니다.
 */
const Landing = ({ onSignin, onJoin, isStory }) => {//Functional Component 만들기
    return(
         <Container>
          <Login
            onSignin={onSignin}
            onJoin={onJoin}
            isStory={isStory}
          />
         </Container>
     )
 }

 export default Landing