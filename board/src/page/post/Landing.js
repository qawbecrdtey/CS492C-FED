import React, {useEffect, useState } from 'react'
import axios from 'axios';

const Landing = () => {//Functional Component 만들기

    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('api/hello')      //endpoint. getRequest를 server 즉 index.js로 보내질 것
        // .then(response => console.log(response.data))   //server 에서 돌아온 response를 콘솔창에 출력해봄
        .then(response => setData(response.data))   //server 에서 돌아온 response를 콘솔창에 출력해봄
    }, [])
    
    
    return(
         <div>
          {data}
         </div>
     )
 }

// const Landing = () => {
//     const { naver } = window;
 
//     const Login = () => {
//      Naver();
//      UserProfile();
//     }
    
//     useEffect(Login, []);
    
//     const Naver = () => {
//        const naverLogin = new naver.LoginWithNaverId({
//          clientId: "_xriyns1iwvtRUz9k3eE",
//          callbackUrl: "http://localhost:4000/api/login",
//          isPopup: false,
//          loginButton: {color: "green", type: 1, height: 30} ,
//          callbackHandle: true
//        });
//        naverLogin.init();
//      }
   
//      const UserProfile = () => {
//        window.location.href.includes('access_token') && GetUser();
//        function GetUser() {
//          const location = window.location.href.split('=')[1];
//          const token = location.split('&')[0];
//          console.log("token: ", token);
//          fetch(`${API}/account/sign-in` , {
//            method: "GET",
//            headers : {
//              "Content-type" : "application/json",
//              "Authorization": token
//            },
//          })
//          .then(res => res.json())
//          .then(res => {
//            localStorage.setItem("access_token", res.token);
//            setUserData({
//              nickname : res.nickname,
//              image : res.image
//            })
//          })
//          .catch(err => console.log("err : ", err));
//        }
//      };
     
//      return (
//        <SideLogin className="login">
//          <UserInfo>
//            <SideText>로그인</SideText>  
//          </UserInfo>
//          <LoginLink onClick={Login} id="naverIdLogin" /> 
//        </SideLogin>
//      )
// };


 export default Landing