import React, { useCallback, useState } from 'react';
import { 
  DropdownContainer, 
  DropdownBody, 
  DropdownSelect, 
  DropdownMenu, 
  DropdownItemContainer, 
  ItemName, 
  PageMoveContainer, 
  PageContainer, 
  GContainer, 
  TextContainer, 
} from './styled';
import Pagination from '../Pagination/Pagination';
import { setPostPerPage } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import PostList from '../PostList';

// eslint-disable-next-line react/prop-types
const PageNumSelector = ({ pageNO }) => {
    const [isActive, setIsActive] = useState(false);
    const [item, setItem] = useState(20);
    const dispatch = useDispatch();
  
    const onActiveToggle = () => {
      setIsActive((prev) => !prev);
      console.log(isActive);
    };
  
    const onSelectItem = useCallback((e) => {
        const targetId = e.target.id;

        if (targetId === "item_name") {
          setItem(e.target.parentElement.innerText);
          dispatch(setPostPerPage(parseInt(e.target.parentElement.innerText)));
        } else if (targetId === "item") {
          setItem(e.target.innerText);
          dispatch(setPostPerPage(parseInt(e.target.innerText)));
        }

        setIsActive((prev) => !prev);
    }, []);

    const dropdownItems = 
    [{
        id: 1,
        name: 2,
    },{
        id: 2,
        name: 5,
    },{
        id: 3,
        name: 10,
    },{
        id: 4,
        name: 20,
    },{
        id: 5,
        name: 50,
    }];
  
    return (
    <GContainer>
      <PostList pageNO={pageNO} postPerPage={parseInt(item)}/>
      <PageMoveContainer>
        <TextContainer>post/page</TextContainer>
        <DropdownContainer>
          <DropdownBody onClick={onActiveToggle}>
            {item ? (
                <ItemName>{item}</ItemName>
            ) : (
                <DropdownSelect>선택해주세요.</DropdownSelect>
            )}
          </DropdownBody>
          <DropdownMenu isActive={isActive}>
            {dropdownItems.map((item) => (
              <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
                <ItemName id="item_name">{item.name}</ItemName>
              </DropdownItemContainer>
            ))}
          </DropdownMenu>
        </DropdownContainer>
        <PageContainer>
              <Pagination articlePerPage={item}/>
        </PageContainer>
      </PageMoveContainer>
    </GContainer>
    );
  };
  
  export default PageNumSelector;