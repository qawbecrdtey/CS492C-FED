import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './list.css';

export const List = ({ titleno, title, writer, time, view, like, comment }) => (
  <section className="list">
    <div className="list--title">
      <Button size="small" label="☑️" />
      <Button size="small" label={titleno} />
      <Button size="small" label={title} />
    </div>
    <div className="list--info">
      <Button size="small" label={writer} />
      <Button size="small" label={time} />
      <Button size="small" label={view} />
      <Button size="small" label={like} />
      <Button size="small" label={comment} />
    </div>
  </section>
);

List.propTypes = {
  title: PropTypes.string, 
  titleno: PropTypes.string,
  writer: PropTypes.string, 
  time: PropTypes.string,
  view: PropTypes.string, 
  like: PropTypes.string,
  comment: PropTypes.string
};

List.defaultProps = {

};
