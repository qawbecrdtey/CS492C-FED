import { action } from '@storybook/addon-actions';
import React from 'react';
import PageNumSelector from './PageNumSelector';

export default {
    title : 'PageNumSelector component',
    component: PageNumSelector,
};

export const PageNumSelectorComponent = () => 
    <PageNumSelector 
        onClickDropDownMenu={action('onClickDropDownMenu')}
    />;

PageNumSelectorComponent.story = {
    name: 'PageNumSelector',
};