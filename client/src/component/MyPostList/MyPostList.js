import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
const MyPostList = () => {
  const dispatch = useDispatch();
  const _mypostList = useSelector(state => state.user.myPostList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const sorted_mypostList = [..._mypostList];

  const [element, setElement] = useState('글번호');

  sorted_mypostList.sort(function(a,b) {
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
      return a[6].localeCompare(b[6])
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
    dispatch(getMyPost(body));
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성 시간', '조회수']} getElement={setElement}>
        {
          _mypostList ? _mypostList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={null} created_date={char[6]} views={char[7]} mypage={true} />
            )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyPostList;
