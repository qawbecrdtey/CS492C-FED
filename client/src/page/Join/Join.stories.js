import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Join from './Join';

const store = {
    getState: () => {
        return {
            user : 
            {
                userList : [
                    [ 'something',
                    'dain', 
                    '1234', 
                    'A', 
                    '24', 
                    '010' ]
                ]
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
    title : 'Join component',
    component: Join,
    decorators: [withReduxMockStore]
};

const JoinComponent = () => {
    return (
        <Join  
            isStory={true}
            onRegister={action('onRegister')}
        />
    )
};

export const Default = JoinComponent.bind({});

JoinComponent.story = {
    name: 'Join',
};