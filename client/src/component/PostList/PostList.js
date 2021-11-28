import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getAllPost, getCurrentPostsNumInfo } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
import MainPageFunc from '../MainpageFunc/MainPageFunc';
 
// eslint-disable-next-line react/prop-types
const PostList = ({ pageNO, postPerPage }) => {
  const dispatch = useDispatch();
  const _postList = useSelector(state => state.user.postList);
  const sorted_postList = [..._postList];
  // eslint-disable-next-line no-unused-vars
  const [element, setElement] = useState('글번호');
  sorted_postList.sort(function(a,b) {
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
  })

  console.log('pageNO : ' + pageNO);
  console.log('postperpage : ' + postPerPage);
  console.log('element : ' + element);

  const startIndex = (pageNO - 1) * postPerPage;
  const endIndex = pageNO * postPerPage;

  const render_postList = sorted_postList.slice(startIndex, endIndex);
  const [removeList, setRemoveList] = useState([]);
  const addRemove = postNO => {
    setRemoveList(removeList.concat(postNO));
  };
  const delRemove = postNO => {
    setRemoveList(
      removeList.filter(removeList => removeList != postNO)
    );
  };

  const getElement = (element) => {
    setElement(element);
  }

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getCurrentPostsNumInfo());
  }, [ ])

  return (
    <ListContainer>
      <MainPageFunc removelist={removeList}/>
      <CommonTable headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']} getElement={getElement}>
        {
          render_postList ? render_postList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={char[5]} created_date={char[6]} views={char[7]} mypage={false} add={addRemove} del={delRemove}/>
            )
          }) : ''
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default PostList;
