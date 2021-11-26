import React, { useCallback, useState } from 'react';
import { DropdownContainer, DropdownBody, DropdownSelect, DropdownMenu, DropdownItemContainer, ItemName, PageMoveContainer, PageContainer} from './styled';
import Pagination from '../Pagination/Pagination';

const PageNumSelector = () => {
    const [isActive, setIsActive] = useState(false);
    const [item, setItem] = useState(20);
  
    const onActiveToggle = () => {
      setIsActive((prev) => !prev);
      console.log(isActive);
    };
  
    const onSelectItem = useCallback((e) => {
        const targetId = e.target.id;

        if (targetId === "item_name") {
        setItem(e.target.parentElement.innerText);
        } else if (targetId === "item") {
        setItem(e.target.innerText);
        }

        setIsActive((prev) => !prev);
    }, []);

    const dropdownItems = [{
            id: 0,
            name: 5,
        },{
            id: 11,
            name: 10,
        },{
            id: 3,
            name: 20,
        },{
            id: 4,
            name: 50,
        },{
          id: 5,
          name: 2,
      }];
  
    return (
    <PageMoveContainer>
      <DropdownContainer>
        <DropdownBody onClick={onActiveToggle}>
          {item ? (
            <>
              <ItemName>{item}</ItemName>
            </>
          ) : (
            <>
              <DropdownSelect>선택해주세요.</DropdownSelect>
            </>
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
    );
  };
  
  export default PageNumSelector;