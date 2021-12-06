import { action } from '@storybook/addon-actions';
import React from 'react';
import CommonTable from './CommonTable';

export default {
    title : 'CommonTable component',
    component: CommonTable,
};

// export const CommonTableComponent = () => <CommonTable />;
const _getElement = (condition) => {
    console.log(condition);
}

const _getChecked = (checked) => {
    console.log(checked);
}

// export const Default = CommonTableComponent.bind({});
// Default.args = {
//     headersName: ['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수'],
//     getElement: _getElement,
//     getChecked: _getChecked,
//     // isStory: true
// }

export const CommonTableComponent = () => {
    return (
        <CommonTable
            headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']}
            getElement={_getElement}
            getChecked={_getChecked}
            myPage={false}
            onClickCheckbox={action('onClickCheckbox')}
        />
    )
};


CommonTableComponent.story = {
    name: 'CommonTable',
};