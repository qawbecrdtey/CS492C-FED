import React from 'react';

import { List } from './List';

export default {
  title: 'Board/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const ListExample = Template.bind({});
ListExample.args = {
  titleno: 'titleno',
  title: 'title',
  writer: 'writer', 
  time: 'time',
  view: 'view', 
  like: 'like',
  comment: 'comment'
};

