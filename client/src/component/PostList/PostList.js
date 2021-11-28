/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { request } from '../../utils/axios';
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
  DropDownContent,
  SearchButton
 } from './styled';
import MainPageFunc from '../MainpageFunc/MainPageFunc';

// eslint-disable-next-line react/prop-types
const PostList = ({ pageNO, postPerPage, getPostCount }) => {
  const dispatch = useDispatch();
  const _postList = useSelector(state => state.user.postList);
  const [searched_postList, setSP] = useState([..._postList]);
  const [sortCondition, setSortCondition] = useState({
    element: '글번호',
    sortFlag: [false, false, false, false, false, false],
  })
  const [active, setActive] = useState(false);
  const [queryItem, setQueryItem] = useState('');
  const [query, setQuery] = useState('');
  const sorted_postList = [...searched_postList];
  getPostCount(sorted_postList.length);
  sorted_postList.sort(function(a,b) {
    if (sortCondition.element == '글번호') {
      if (sortCondition.sortFlag[0]) return a[1] - b[1]
      else return b[1] - a[1]
    } else if (sortCondition.element == '제목(댓글수)') {
      if (sortCondition.sortFlag[1]) return a[2].localeCompare(b[2]); 
      else return b[2].localeCompare(a[2]);
    } else if (sortCondition.element == '좋아요') {
      if (sortCondition.sortFlag[2]) return a[4] - b[4]
      else return b[4] - a[4]
    } else if (sortCondition.element == '작성자') {
      if (sortCondition.sortFlag[3]) return a[5].localeCompare(b[5]);
      else return b[5].localeCompare(a[5]);
    } else if (sortCondition.element == '작성 시간') {
      if (sortCondition.sortFlag[4]) return a[6] - b[6]
      else return b[6] - a[6]
    } else if (sortCondition.element == '조회수') {
      if (sortCondition.sortFlag[5]) return a[7] - b[7]
      else return b[7] - a[7]
    }
  });

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
  }

  const onSelectQueryItem = (e) => {
    setQueryItem(e.target.innerText);
    setActive(false);
  }
  
  const onSetQuery = e => {
    setQuery(e.target.value);
  }

  const search = () => {
    if (queryItem == '작성자') {
      setSP(_postList.filter(item => item[5] == query));
    } else if (queryItem == '제목') {
      setSP(_postList.filter(item => {
        return item[2].includes(query);
      }));
    } else if (queryItem == '내용') {
      setSP(_postList.filter(item => {
        return item[8].includes(query);
      }));
    } else if (queryItem == '전체') {
      let body = {
        queryString: query,
      };
      request('post', '/api/querycomment', body).then(response => {
        setSP(_postList.filter(item => {
          if (item[2].includes(query) || item[5].includes(query) || item[8].includes(query)) return true;
          var i;
          for (i = 0; i < response.length; i++) {
            if (item[1] == response[i].postNO) {
              return true;
            }
          }
          return false;
        }))
      });
    } else if (queryItem == '댓글') {
      let body = {
        queryString: query,
      };
      request('post', '/api/querycomment', body).then(response => {
        setSP(_postList.filter(item => {
          var i;
          for (i = 0; i < response.length; i++) {
            if (item[1] == response[i].postNO) {
              return true;
            }
          }
          return false;
        }))
      });
    }
    setActive(false);
  }
  
  const dropDownElements = [
    {id: 1, name: '전체',},
    {id: 2, name: '제목',},
    {id: 3, name: '내용',},
    {id: 4, name: '작성자',},
    {id: 5, name: '댓글',},
  ]

  const getElement = (condition) => {
    setSortCondition(condition);
  }

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getCurrentPostsNumInfo());
  }, []);

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
          <Input onChange={onSetQuery}/>
          <SearchButton onClick={search}>검색</SearchButton>
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
