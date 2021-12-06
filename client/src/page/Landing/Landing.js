/* eslint-disable react/prop-types */
import React from 'react'
import { Container} from './styled';
import Login from '../../component/Login'

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