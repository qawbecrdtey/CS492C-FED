import React from 'react'
import { Container} from './styled';
import Login from '../../component/Login'

const Landing = () => {//Functional Component 만들기

    // const [data, setData] = useState('')

    // useEffect(() => {
    //     axios.get('api/hello')      //endpoint. getRequest를 server 즉 index.js로 보내질 것
    //     .then(response => setData(response.data))   //server 에서 돌아온 response를 콘솔창에 출력해봄
    // }, [])
    
    
    return(
         <Container>
          <Login />
         </Container>
     )
 }

 export default Landing