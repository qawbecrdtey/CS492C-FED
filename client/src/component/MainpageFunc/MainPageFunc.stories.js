import React from 'react';
import MainPageFunc from './MainPageFunc';
import { action } from '@storybook/addon-actions';

export default {
    title : 'MainPageFunc component',
    component: MainPageFunc,
};

export const MainPageFuncComponent = () => {
    return (
        <MainPageFunc 
            isStory={true}
            onWrite={action('onWrite')}
            onDelete={action('onDelete')}
        />
    )
}

MainPageFuncComponent.story = {
    name: 'MainPageFunc',
};