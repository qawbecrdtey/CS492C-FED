import React, { useCallback, useState } from 'react';
import { 
  DropdownContainer, 
  DropdownBody, 
  DropdownMenu, 
  DropdownItemContainer, 
  ItemName, 
  PageMoveContainer, 
  PageContainer, 
  GContainer, 
  TextContainer, 
} from './styled';
import Pagination from '../Pagination/Pagination';
import { setPostPerPage, updateCurrentPage } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PostList from '../PostList';
import Triangle from '../Triangle';
import MyPostList from '../MyPostList';
import MyLikeList from '../MyLikeList';
import MyCommentList from '../MyCommentList';
import PropTypes from 'prop-types';

/**  
 * - 페이지당 게시물 개수를 결정하기 위한 PostList의 상위 컴포넌트입니다.    
 * - Actions
 *    - DropDownMenu: DropdownMenu에서 선택된 Item을 바탕으로 
 *      postPerPage값을 PostList와 Pagination 컴포넌트에 props로써 전달합니다.
 */

// eslint-disable-next-line react/prop-types
const PageNumSelector = ({ pageNO, parentComponent, isStory, onClickDropDownMenu }) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const _postlist = useSelector(state => state.user.postList);
    const postPerPage = useSelector(state => state.user.postPerPage);
    const [_postCount, setPostCount] = useState(_postlist.length);

    const history = useHistory();

    const getPostCount = (no) => {
      setPostCount(no);
    }

    const onActiveToggle = () => {
      setIsActive((prev) => !prev);
    };
  
    const onSelectItem = useCallback((e) => {
        const targetId = e.target.id;

        if (targetId === "item_name") {
          dispatch(setPostPerPage(parseInt(e.target.parentElement.innerText)));
          dispatch(updateCurrentPage(1));
        } else if (targetId === "item") {
          dispatch(setPostPerPage(parseInt(e.target.innerText)));
          dispatch(updateCurrentPage(1));
        }
        history.push(`/${(() => {
          if(parentComponent === 'PostMain') return 'postMain';
          if(parentComponent === 'MyPagePost') return 'myPage/myPosts';
          if(parentComponent === 'MyPageLike') return 'myPage/myLikes';
          if(parentComponent === 'MyPageComment') return 'myPage/myComments';
          return '';
        })()}/1`);

        setIsActive((prev) => !prev);
    }, []);

    const dropdownItems = [
      {id: 1, name: 2,},
      {id: 2, name: 5,},
      {id: 3, name: 10,},
      {id: 4, name: 20,},
      {id: 5, name: 50,}
    ];
  
    return (
    <GContainer>
      {parentComponent == 'PostMain' ? <PostList pageNO={pageNO} postPerPage={parseInt(postPerPage)} getPostCount={getPostCount}/> : null}
      {parentComponent == 'MyPagePost' ? <MyPostList pageNO={pageNO} postPerPage={parseInt(postPerPage)} getPostCount={getPostCount}/> : null}
      {parentComponent == 'MyPageLike' ? <MyLikeList pageNO={pageNO} postPerPage={parseInt(postPerPage)} getPostCount={getPostCount}/> : null}
      {parentComponent == 'MyPageComment' ? <MyCommentList pageNO={pageNO} postPerPage={parseInt(postPerPage)} getPostCount={getPostCount}/> : null}
      <PageMoveContainer>
        <TextContainer>post/page</TextContainer>
        <DropdownContainer>
          <DropdownMenu isActive={isActive}>
            {isStory ? dropdownItems.map((item) => (
              <DropdownItemContainer id="item" key={item.id} onClick={onClickDropDownMenu}>
                <ItemName id="item_name" >{item.name}</ItemName>
              </DropdownItemContainer>
            )) : dropdownItems.map((item) => (
              <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
                <ItemName id="item_name" >{item.name}</ItemName>
              </DropdownItemContainer>
            ))}
          </DropdownMenu>
          <DropdownBody onClick={onActiveToggle}>
            <Triangle />
            <ItemName>{postPerPage}</ItemName>
          </DropdownBody>
        </DropdownContainer>
        <PageContainer>
              <Pagination articlePerPage={postPerPage} postCount={_postCount} parentComponent={parentComponent}/>
        </PageContainer>
      </PageMoveContainer>
    </GContainer>
    );
  };
  
  PageNumSelector.propTypes = {
  /**
   * 현재 페이지 정보입니다.
   */
   pageNO: PropTypes.number,
  /**
   * 상위 컴포넌트의 종류이자 게시판 종류입니다.   
   * PostList/MyPostList/MyCommentList/MyLikeList 중 하나를 렌더링합니다.
   */
   parentComponent: PropTypes.string,
};

  export default PageNumSelector;