import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
// import CommonTableColumn from '../../component/table/CommonTableColumn';
// import CommonTableRow from '../../component/table/CommonTableRow';
import {postList} from '../../Data';
import Row from '../../component/Row'
// const Checkbox = props => <input type="checkbox" {...props} />;
 
const PostList = () => {
  const [ dataList, setDataList ] = useState([]);
 
  useEffect(() => {
    setDataList(postList);
  }, [ ])
  return (
    <>
      <CommonTable headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <Row key={index} no={1} title={'haha'} no_comments={4} likes={2} writer={'dain'} create_time={1111} views={3} />
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}
 
export default PostList;