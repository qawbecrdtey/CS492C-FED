import { BrowserRouter, Route } from 'react-router-dom';
import React, {Component, useEffect} from 'react';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
import axios from 'axios'
 
const App = () => {
  useEffect ( () => {
    axios.get("/api/hello").then(res => console.log(res.data))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/' component={PostMain} />
      </BrowserRouter>
    </div>
  );
}

// class App extends Component {
//   state = {
//     name: null
//   }
//   // componentDidMount(){
//   //   fetch('http://localhost:4000/data1.json')
//   //   .then(res => res.json())
//   //   .then(data => this.setState({title : data.name}))
//   // }
//   render(){
//     return(
//       <div className="App">
//         {/* <div>{this.state.name}</div> */}
//         <BrowserRouter>
//           <Route exact path='/postView/:no' component={PostView} />
//           <Route exact path='/' component={PostMain} />
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
 
export default App;