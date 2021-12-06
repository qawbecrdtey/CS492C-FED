import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PageNumSelector from './PageNumSelector';
import StoryRouter from 'storybook-react-router';

const store = {
    getState: () => {
        return {
            user : 
            {
                postList : [
                    ["619bacaa929ca700ee96d13a",100,'글1',2,3,'dain','2021년 12월 04일 16시 38분',10,'내용1',['dain','dain2']],
                    ["619bacaa929ca700ee96d13a",244,'글2',4,5,'dain','2021년 12월 02일 8시 12분',15,'내용2',['dain','dain2']]
                ],
                postPerPage: 20,
            }
        };
    },
    subscribe: () => {},
    dispatch: action('dispatch')
};

const withReduxMockStore = (story) => (
    <Provider store={store}>{story()}</Provider>
)

export default {
    title : 'PageNumSelector component',
    component: PageNumSelector,
    decorators: [withReduxMockStore, StoryRouter()]
};

export const PageNumSelectorComponent = () => 
    <PageNumSelector 
        pageNO={1}
        parentComponent={'postMain'}
        isStory={true}
        onClickDropDownMenu={action('onClickDropDownMenu')}
    />;

PageNumSelectorComponent.story = {
    name: 'PageNumSelector',
};