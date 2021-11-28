/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getAllPost, getCurrentPostsNumInfo } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { 
  FunctionContainer, 
  ListContainer, 
  SearchContainer, 
  SearchTextContainer, 
  Input,
  CategoryContainer,
  TriangleDown,
  TriangleUp,
  TriangleContainer,
  QueryElementTextContainer,
  DropDownBody,
  DropDownMenu,
  DropDownContent
 } from './styled';
import MainPageFunc from '../MainpageFunc/MainPageFunc';
 
// eslint-disable-next-line react/prop-types
const PostList = ({ pageNO, postPerPage }) => {
  const dispatch = useDispatch();
  const _postList = useSelector(state => state.user.postList);
  const sorted_postList = [..._postList];
  // const [filterElement, setFilterElement] = useState('');
  // const [filterText, setFilterText] = useState('');
  const [element, setElement] = useState('글번호');
  const [active, setActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [queryItem, setQueryItem] = useState('전체');
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

  const onActiveToggle = () => {
    setActive(!active);
    console.log('active: ' + active);
  }

  const onSelectQueryItem = (e) => {
    setQueryItem(e.target.innerText);
    setActive(false);
  }
  
  const dropDownElements = [
    {
      id: 1,
      name: '전체',
    },
    {
      id: 2,
      name: '제목',
    },
    {
      id: 3,
      name: '내용',
    },
    {
      id: 4,
      name: '글쓴이',
    },
    {
      id: 5,
      name: '댓글',
    },
  ]

  const getElement = (element) => {
    setElement(element);
  }
 
  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getCurrentPostsNumInfo());
  }, [ ])

  return (
    <ListContainer>
      <FunctionContainer>
        <SearchContainer>
          <SearchTextContainer>검색분류</SearchTextContainer>
          <DropDownMenu>
            <CategoryContainer onClick={onActiveToggle}>
              <TriangleContainer>
                <TriangleUp />
                <TriangleDown />
              </TriangleContainer>
              <QueryElementTextContainer>{queryItem}</QueryElementTextContainer>
            </CategoryContainer>
            <DropDownBody isActive={active}>
              {dropDownElements.map((item) => (
                <DropDownContent key={item.id} onClick={onSelectQueryItem}>{item.name}</DropDownContent>
              ))}
            </DropDownBody>
          </DropDownMenu>
          <SearchTextContainer>검색어</SearchTextContainer>
          <Input />
        </SearchContainer>
        <MainPageFunc removelist={removeList}/>
      </FunctionContainer>
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
