/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { request } from '../../utils/axios';
import { getAllPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { 
  FunctionContainer, 
  ListContainer, 
  SearchContainer, 
  SearchTextContainer, 
  Input,
  CategoryContainer,
  QueryElementTextContainer,
  DropDownBody,
  DropDownMenu,
  DropDownContent,
  SearchButton
 } from './styled';
import MainPageFunc from '../MainpageFunc/MainPageFunc';
import Triangle from '../Triangle';
const POST_URL = '/api/post';
import PropTypes from 'prop-types';

/**   
 * - 메인 페이지의 게시물 목록을 노출하는데 사용됩니다. 
 *   
 * 하위 컴포넌트는 다음과 같습니다.    
 *  - DropDownMenu는 검색분류를 결정하는 드롭다운 메뉴입니다.
 *  - Input은 검색어를 입력하는 데 사용됩니다.
 *  - CommonTable과 Row는 검색, 정렬, 페이지 정보로 필터링된 게시물을 map
 *    함수를 통해 해당 페이지에 게시물 테이블을 렌더링합니다.
 *  - MainPageFunc은 체크박스를 통해 결정된 삭제 대상 postNO의 list인
 *    removeList state를 인자로 넘겨주어 해당 컴포넌트 내의 삭제 버튼 클릭시 삭제할 수 있도록 합니다.
 *  - Actions
 *       - 검색 : 선택된 검색분류와 검색어로 검색 결과를 렌더링해줍니다.
 *       - 글쓰기 : 글쓰기 페이지로 이동합니다.
 *       - 삭제 : 체크된 게시글들이 삭제됩니다.
 *       - 전체 체크박스 : 페이지에 있는 게시글이 전체선택/해제됩니다.
 *       - 개별 체크박스 : 게시글마다 체크가 가능하고, 체크된 게시글을 추후에 삭제할 수 있습니다.
 *       - 제목 클릭 : 해당 게시글 상세보기 페이지로 이동합니다.
 */
const PostList = ({ pageNO, postPerPage, getPostCount, onClickCheckbox, onClickCheck, isStory, onSearch, onWrite, onDelete, onSortColumn }) => {
  const thiscomponent = '/postMain';
  const dispatch = useDispatch();
  const _postList = useSelector(state => state.user.postList);
  const [loading, setLoading] = useState(true);
  const [allCheck, setAllCheck] = useState(false);
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
      if (sortCondition.sortFlag[4]) return a[6].localeCompare(b[6]);
      else return b[6].localeCompare(a[6]);
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
      setSP(_postList.filter(item => item[5].includes(query)));
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
      if (query != '') {
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
      } else {
        setSP(_postList);
      }
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

  const getChecked = (checked) => {
    setAllCheck(checked);
    if (checked) {
      const array = [];
      var i;
      for (i = 0; i<render_postList.length; i++) {
        array.push(render_postList[i][1]);
      }
      setRemoveList(array);
    } else {
      setRemoveList([]);
    }
  }

  async function loadPosts () {
    const data = await request('get', POST_URL + '/posts', null);
    var postlist = [];
    var i;
    for (i=0; i<data.length; i++) {
      postlist.push(Object.values(data[i]));
    }
    setSP(postlist);
    setLoading(false);    
  }

  useEffect(() => {
    dispatch(getAllPost());
    loadPosts();
  }, []);

  return (
    <ListContainer>
      <FunctionContainer>
        <SearchContainer>
          <SearchTextContainer>검색분류</SearchTextContainer>
          <DropDownMenu>
            <CategoryContainer onClick={onActiveToggle}>
              <Triangle />
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
          {isStory ? <SearchButton onClick={onSearch}>검색</SearchButton>
           : <SearchButton onClick={search}>검색</SearchButton>}
        </SearchContainer>
        <MainPageFunc removelist={removeList} isStory={isStory} onWrite={onWrite} onDelete={onDelete}/>
      </FunctionContainer>
      {loading ? null :
        <CommonTable headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']} getElement={getElement} getChecked={getChecked} mypage={false} onClickCheckbox={onClickCheckbox} isStory={isStory} onSortColumn={onSortColumn}>
          {
            render_postList ? render_postList.map((char, index) => {
              return (
                <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={char[5]} created_date={char[6]} views={char[7]} mypage={false} add={addRemove} del={delRemove} isAllChecked={allCheck} parentcomponent={thiscomponent} onClickCheck={onClickCheck}/>
              )
            }) : ''
          }
        </CommonTable>
      }
    </ListContainer>
  )
}

PostList.propTypes = {
  /**
   * 현재 페이지 번호를 나타내며 게시물 리스트를 인덱싱해서 띄워주기 위해 사용됩니다.
   */
  pageNO: PropTypes.number,
  /**
   * 현재 페이지 번호와 함께 한 페이지당 노출해야 하는 게시물의 개수로써 인덱싱할 개수를 정해주기 위해 사용됩니다.
   */
  postPerPage: PropTypes.number,
  /**
   * 검색을 할 경우 총 게시물의 수가 바뀌는데, 이때 게시물의 수를 상위 컴포넌트에 콜백함수로 전달해줘서 전체 페이지 개수를 결정합니다.
   */
  getPostCount: PropTypes.func,
};
 
export default PostList;