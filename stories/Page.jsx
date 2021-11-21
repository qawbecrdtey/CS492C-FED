import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { List } from './List';
import { Button } from './Button';
import { Pagination } from './Pagination';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section className="page">
      <div className="page--header">
        <h2>Post List</h2>
        <div className="page--header--btn">
          <Button size="small" label="Modify" />
          <Button size="small" label="Delete" />
        </div>
      </div>
      <input className="page--search" type="text" placeholder="Search!!"/>
      <p>
        <List titleno={'TitleNo'} title={'Title'}  writer={'Writer'} time={'Time'} view={'View'} like={'Like'} comment={'Comment'} />
      </p>
      <p>
        <List titleno={'1'} title={'lorem ipsum dolor sit'}  writer={'voluptas'} time={'10:00'} view={'😉 1'} like={'👍🏻 11'} comment={'💬 11'} />
      </p>
      <p>
        <List titleno={'2'} title={'amet consectetur adipisicing elit'}  writer={'dolores'} time={'00:11'} view={'😉 10'} like={'👍🏻 39'} comment={'💬 21'} />
      </p>
      <p>
        <List titleno={'3'} title={'Blanditiis nisi laborum'}  writer={'aliquam'} time={'00:23'} view={'😉 64'} like={'👍🏻 21'} comment={'💬 62'} />
      </p>
      <p>
        <Pagination num={"5"}/>
      </p>
    </section>
  </article>
);

Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
