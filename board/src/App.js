import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
import Landing from './page/post/Landing';
import Post from './page/post/Post/Post'
import Markdown from './page/post/markdown'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/markdown' component={Markdown} />
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/postMain/' component={PostMain} />
        {/* <Route exact path='/' component={Landing} /> */}
        <Route exact path='/' component={Post} />
        {/* <Route exact path='/Logined/' component={Logined} /> */}
      </BrowserRouter>
    </div>
  );
}
 
export default App;