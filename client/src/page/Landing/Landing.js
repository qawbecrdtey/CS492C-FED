/* eslint-disable react/prop-types */
import React from 'react'
import { Container} from './styled';
import Login from '../../component/Login'


/**
 * - Login 컴포넌트를 하위 컴포넌트로 가집니다.
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