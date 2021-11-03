import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
import Landing from './page/post/Landing';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/postMain/' component={PostMain} />
        <Route exact path='/' component={Landing} />
      </BrowserRouter>
    </div>
  );
}
 
export default App;