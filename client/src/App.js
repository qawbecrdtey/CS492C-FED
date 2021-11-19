/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './page/PostMain';
import PostView from './component/PostView/PostView';
import Landing from './page/Landing/Landing';
import Join from './page/Join'
import PostWrite from './page/PostWrite/PostWrite';
 
function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/postMain/' component={PostMain} />
        <Route exact path='/Join/' component={Join} />
        <Route exact path='/postWrite/' component={PostWrite} />
      </BrowserRouter>
    </div>
  );
}
 
export default App;