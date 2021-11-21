import React, { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import './Checkbox.css';

const Checkbox = ({ uuid, checkedItems, setCheckedItems }) => {
    const [checked, setChecked] = useState(false);

    let newCheckedItems = checkedItems;

    const checkedItemHandler = (isChecked) => {
        if(isChecked) {
            newCheckedItems.add(uuid);
            setCheckedItems(checkedItems);
        }
        else if(checkedItems.has(uuid)) {
            newCheckedItems.delete(uuid);
            setCheckedItems(checkedItems);
        }
    };

    const checkHandler = ({ e }) => {
        setChecked(!checked);
        checkedItemHandler(uuid, e.checked);
    };

    return (
        <input type="checkbox" checked={ checked } onChange={ (e) => checkHandler(e) } />
    );
};

export default Checkbox;