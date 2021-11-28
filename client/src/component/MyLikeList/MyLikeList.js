import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyLikedPosts } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
// eslint-disable-next-line react/prop-types
const MyLikeList = () => {
  const dispatch = useDispatch();
  const _mylikeList = useSelector(state => state.user.myLikeList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const sorted_mylikeList = [..._mylikeList];

  const [element, setElement] = useState('글번호');

  sorted_mylikeList.sort(function(a,b) {
    if (element == '글번호') {
      if(a[1] > b[1]) return -1;
      if(a[1] == b[1]) return 0;
      if(a[1] < b[1]) return 1;
    } else if (element == '제목(댓글수)') {
      return a[2].localeCompare(b[2]);
    } else if (element == '좋아요') {
      if(a[4] > b[4]) return -1;
      if(a[4] == b[4]) return 0;
      if(a[4] < b[4]) return 1;
    } else if (element == '작성자') {
      return a[5].localeCompare(b[5])
    } else if (element == '작성 시간') {
      if(a[6] > b[6]) return -1;
      if(a[6] == b[6]) return 0;
      if(a[6] < b[6]) return 1;
    } else if (element == '조회수') {
      if(a[7] > b[7]) return -1;
      if(a[7] == b[7]) return 0;
      if(a[7] < b[7]) return 1;
    }
  });



  useEffect(() => {
    let body = {
        userID: _loginUser['userID']
    }
    dispatch(getMyLikedPosts(body));
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성자', '작성 시간', '조회수']} getElement={setElement}>
        {
          _mylikeList ? _mylikeList.map((char, index) => {
              return (
                <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={char[5]} created_date={char[6]} views={char[7]} mypage={true} />
              )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyLikeList;