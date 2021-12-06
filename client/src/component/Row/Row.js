/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Checkbox = props => <input type="checkbox" {...props} />;
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4080/');
import { HoverContainer, HoverContent, ProfileContent } from './styled';
import PropTypes from 'prop-types';

/**
 * - 메인 페이지에서 각 게시물 목록의 정보로 구성됩니다.
 * - Actions 
 *      - Checkbox : 게시글에 해당되는 체크박스에 체크 후 상위 컴포넌트에 있는 삭제 버튼을 누르면 해당 게시글이 삭제됩니다.
 *      - 제목 : 클릭 시 해당 게시글 상세보기 페이지로 이동합니다.
 */

// eslint-disable-next-line react/prop-types
const Row = ({ postNO, title, no_comments, likes, userID, created_date, views, mypage, add, del, isAllChecked, parentcomponent, onClickCheck }) => {
  const [checked, setChecked] = useState(false);
  const test = useSelector(state => state.user.userList);
  const querystring = '?parent=';

  const handleClick = () => {
    setChecked(!checked);
    if (checked) {
      del(postNO);
    } else {
      add(postNO);
    }
  }
  const clickpost = () => {
    let item = {
      postNO: postNO,
    }
    socket.emit('post-click-snd', item);
  }
  useEffect(() => {
    setChecked(isAllChecked);
  }, [isAllChecked]);
  
  useEffect(() => {
    setChecked(false);
  }, [window.location.href]);
  return (
    <tr className="common-table-row">
      {mypage ? null : 
       <td><Checkbox checked={checked} onChange={handleClick} onClick={onClickCheck}/></td>}
      <td>{postNO}</td>
      <td>
        <Link to={`/postView/${postNO}${querystring}${parentcomponent}`} onClick={clickpost}>{title}({no_comments})</Link>
      </td>
      <td>{likes}</td>
      {!mypage||userID ? <td className="hover">
        <HoverContainer>
          {userID}
          <HoverContent className="profilecard">
            <ProfileContent>
              이메일: {test.filter(e => (e[1]==userID))[0][3]}
            </ProfileContent>
            <ProfileContent>
              나이: {test.filter(e => (e[1]==userID))[0][4]}
            </ProfileContent>
            <ProfileContent>
              전화번호: {test.filter(e => (e[1]==userID))[0][5]}
            </ProfileContent>
          </HoverContent>
        </HoverContainer>
      </td> : null}
      <td>{created_date}</td>
      <td>{views}</td>
    </tr>
  )
}

Row.propTypes = {
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  postNO: PropTypes.number,
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  title: PropTypes.string,
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  no_comments: PropTypes.number,
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  likes: PropTypes.number,
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  userID: PropTypes.string,
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  created_date: PropTypes.string,
  /**
   * 각 column에 노출하기 위해 받아오는 정보입니다.
   */
  views: PropTypes.number,
  /**
   * 사용되는 게시판의 종류를 상위 컴포넌트에서 받아옵니다.
   */
  mypage: PropTypes.bool,
  /**
   * 콜백함수로 checkbox 선택시 상위 컴포넌트에 이 row의 postNO를 전달해주는 함수입니다.   
   * 체크박스를 통해 게시글 삭제를 할 때 사용됩니다.
   */
  add: PropTypes.func,
  /**
   * 콜백함수로 checkbox 선택시 상위 컴포넌트에 이 row의 postNO를 전달해주는 함수입니다.   
   * 체크박스를 통해 게시글 삭제를 할 때 사용됩니다. 
   */
  del: PropTypes.func,
  /**
   * 상위 컴포넌트에서 받아와서 체크 및 체크 해제를 하는데 사용됩니다.
   */
  isAllChecked: PropTypes.bool,
  /**
   * 사용되는 게시판의 종류를 상위 컴포넌트에서 받아옵니다.
   */
  parentcomponent: PropTypes.string,
    
};

export default Row;