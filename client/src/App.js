/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './page/PostMain';
import PostView from './component/PostView/PostView';
import Landing from './page/Landing/Landing';
import Join from './page/Join'
import PostWrite from './page/PostWrite/PostWrite';
import MyPagePost from './page/MyPagePost';
import MyPageLike from './page/MyPageLike';
import MyPageComment from './page/MyPageComment/MyPageComment';
 
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
        <Route exact path='/myPage/myPosts' component={MyPagePost} />
        <Route exact path='/myPage/myLikes' component={MyPageLike} />
        <Route exact path='/myPage/myComments' component={MyPageComment} />
      </BrowserRouter>
    </div>
  );
}
 
export default App;