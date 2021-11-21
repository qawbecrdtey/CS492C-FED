import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './pagination.css';

export const Pagination = ({ num }) => (
  <section className="pagination">
    <Button size="small" label="<<" />
    <Button size="small" label="<" />
    <Button size="small" label="1" />
    <Button size="small" label="2" />
    <Button size="small" label="3" />
    <Button size="small" label="4" />
    <Button size="small" label={num} />
    <Button size="small" label=">" />
    <Button size="small" label=">>" />
  </section>
);

Pagination.propTypes = {
  num: PropTypes.string
};

Pagination.defaultProps = {

};
