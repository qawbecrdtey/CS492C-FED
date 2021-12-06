// /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import { useSelector } from 'react-redux';
import { ListContainer } from './styled';
import { request } from '../../utils/axios';
import Row from '../Row';
const POST_URL = '/api/post';
 
/**
 * - Row에 thiscomponent 변수를 전달하여 상세보기에서 목록 전환 시
     url 생성에 사용할 수 있도록 합니다.
 * - 내가 쓴 댓글 리스트와 전체 postlist를 서버에서 불러온 후 댓글 리스트의 
     postNO에 대응되는 게시물을 필터링하여 렌더링 합니다.
 * - 서버에서 데이터를 불러올 때 비동기함수를 사용하기 때문에 loading로직을 사용합니다.
 */
// eslint-disable-next-line react/prop-types
const MyCommentList = ({ pageNO, postPerPage, getPostCount, isStory }) => {
  const [_postList, setPL] = useState([]);
  const thiscomponent = '/myPage/myComments';
  const _loginUser = useSelector(state => state.user.loginUser);
  const [reducer_commentlist, setRCL] = useState([]);
  const _myCommentList = useSelector(state => state.user.myCommentList);
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
    if(isStory !== true) {
      loadComments();
    }
  }, []);

  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성자', '작성 시간', '조회수']} getElement={getElement} getChecked={getChecked} mypage={true}>
        {
          !loading ? null :
           isStory ? _myCommentList.map((char, index) => {
              const _postNO = char[1];
              console.log(_postNO);
              const thispost = _postList.find((element) => {
                  if (element[1] === _postNO) {
                    return true;
                  }
              })
              console.log(thispost);
              return (
                <Row key={index} postNO={thispost[1]} title={thispost[2]} no_comments={thispost[3]} likes={thispost[4]} userID={thispost[5]} created_date={thispost[6]} views={thispost[7]} mypage={true} parentcomponent={thiscomponent}/>
              )
          }) : render_commentList.map((char, index) => {
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
        })
          }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyCommentList;