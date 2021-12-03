// /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import { useSelector } from 'react-redux';
import { ListContainer } from './styled';
import { request } from '../../utils/axios';
import Row from '../Row';
const POST_URL = '/api/post';
 
// eslint-disable-next-line react/prop-types
const MyCommentList = ({ pageNO, postPerPage, getPostCount }) => {
  const [_postList, setPL] = useState([]);
  const thiscomponent = '/myPage/myComments';
  const _loginUser = useSelector(state => state.user.loginUser);
  const [reducer_commentlist, setRCL] = useState([]);
  const [loading, setLoading] = useState(false);
  getPostCount(reducer_commentlist.length);
  
  const startIndex = (pageNO - 1) * postPerPage;
  const endIndex = pageNO * postPerPage;

  const render_commentList = reducer_commentlist.slice(startIndex, endIndex);

  const getElement = () => {
  }

  const getChecked = () => {
  }

  async function loadComments () {
    const postdata = await request('get', POST_URL + '/posts', null);
    var postlist = [];
    var i;
    for (i=0; i<postdata.length; i++) {
      postlist.push(Object.values(postdata[i]));
    }
    setPL(postlist);

    let body = {
        userID: _loginUser['userID']
    }
    const data = await request('post', POST_URL + '/mycomments', body);
    var commentlist = [];
    var j;
    for (j=0; j<data.length; j++) {
      commentlist.push(Object.values(data[j]));
    }
    setRCL(commentlist);
    setLoading(true);  
  }

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성자', '작성 시간', '조회수']} getElement={getElement} getChecked={getChecked}>
        {
          loading ? render_commentList.map((char, index) => {
              const _postNO = char[4];
              const thispost = _postList.find((element) => {
                  if (element[1] === _postNO) {
                    return true;
                  }
              })
              console.log(thispost);
              return (
                <Row key={index} postNO={thispost[1]} title={thispost[2]} no_comments={thispost[3]} likes={thispost[4]} userID={thispost[5]} created_date={thispost[6]} views={thispost[7]} mypage={true} parentcomponent={thiscomponent}/>
              )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyCommentList;
