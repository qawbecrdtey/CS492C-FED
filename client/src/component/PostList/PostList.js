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
  const len_postlist = _postList.length;
  console.log('len_postlist : ' + len_postlist);
  sorted_postList.sort((a,b) => {
    if(a[1] > b[1]) return -11;
    if(a[1] == b[1]) return 0;
    if(a[1] < b[1]) return 1;
  })

  console.log('pageNO : ' + pageNO);
  console.log('postperpage : ' + postPerPage);

  const render_postList = sorted_postList.slice(0,100);
  const [removeList, setRemoveList] = useState([]);
  const addRemove = postNO => {
    setRemoveList(removeList.concat(postNO));
  };
  const delRemove = postNO => {
    setRemoveList(
      removeList.filter(removeList => removeList != postNO)
    );
  };
 
  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getCurrentPostsNumInfo());
  }, [ ])

  return (
    <ListContainer>
      <MainPageFunc removelist={removeList}/>
      <CommonTable headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']}>
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