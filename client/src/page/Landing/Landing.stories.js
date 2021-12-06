import React from 'react';
import { action } from '@storybook/addon-actions';
import Landing from './Landing';

export default {
    title : 'Landing component',
    component: Landing,
};

export const LandingComponent = () => {
    return (
        <Landing 
            onSignin={action('onSignin')}
            onJoin={action('onJoin')}
            isStory={true}
        />
    )
}

LandingComponent.story = {
    name: 'Landing',
};