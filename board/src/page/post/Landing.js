import React, {useEffect, useState } from 'react'
import axios from 'axios';

const Landing = () => {//Functional Component 만들기

    // const [data, setData] = useState('')
    const [api_url, setData] = useState('')

    useEffect(() => {
        axios.get('api/naverlogin')      //endpoint. getRequest를 server 즉 index.js로 보내질 것
        // axios.get('api/hello')      //endpoint. getRequest를 server 즉 index.js로 보내질 것
        .then(response => setData(response.data))   //server 에서 돌아온 response를 콘솔창에 출력해봄
    }, [])
    
    
    return(
        //  <div>
        //   {data}
        //  </div>
        <a href =  {api_url}  ><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
     )
 }

 export default Landing