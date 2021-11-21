import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import './Checkbox.css';

const Checkbox = ({ uuid }) => {
    const [checked, setChecked] = useState(false);

    const checkedItemHandler = (uuid, isChecked) => {
        if(isChecked) {
            checkedItems.add(uuid);
            setCheckedItems(checkedItems);
        }
        else if(checkedItems.has(uuid)) {
            checkedItems.delete(uuid);
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