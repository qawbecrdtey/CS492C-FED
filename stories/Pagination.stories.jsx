import React from 'react';

import { Pagination } from './Pagination';

export default {
  title: 'Board/Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const PaginationExample = Template.bind({});
PaginationExample.args = {
  num: "5"
};