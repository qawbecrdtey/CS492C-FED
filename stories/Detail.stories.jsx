import React from 'react';

import { Detail } from './Detail';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Board/Detail',
  component: Detail,
};

const Template = (args) => <Detail {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
