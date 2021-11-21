import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Button } from './Button';
import './detail.css';

export const Detail = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section className="detail">
      <div className="detail--header">
        <h1>Post Title</h1>
        <div>
          <Button size="small" label="Writer" />
          <Button size="small" label="Time" />
        </div>
        <div className="detail--header--footer">
          <div>
            <Button size="small" label="View" />
            <Button size="small" label="Like" />
            <Button size="small" label="Comment" />
          </div>
          <div className="detail--header--func">
            <Button size="small" label="Modify" />
            <Button size="small" label="Delete" />
          </div>
        </div>
      </div>

      <div className="detail--content">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo ratione, omnis culpa at nulla praesentium dignissimos, 
          tenetur aliquam ipsam tempora sunt reprehenderit rem repudiandae
          voluptatibus, hic illo dolorem quos! Fugit ipsam nisi eum hic 
          provident. Aliquam tenetur reiciendis distinctio iusto eveniet 
          nam voluptatibus iste, sint harum fugiat repellat obcaecati 
          veritatis facere laborum, ipsam, suscipit deleniti illo ratione 
          omnis porro explicabo asperiores! Hic quidem similique non dolores
          eveniet rem provident cumque? Deserunt commodi, quas soluta, quam
          labore sequi eius nostrum id fugiat, perferendis aspernatur nulla 
          magnam molestiae odio. Tenetur distinctio autem recusandae delectus, 
        </div>
        <div className="detail--content--footer">
          <Button size="small" label="👍🏻 Like" />
          <Button size="small" label="💬 Comment" />
        </div>
      </div>

      <div className="detail--comment">
        <input className="detail--comment--input" type="text" placeholder="Comment.."/>
        <div className="detail--comment--form">
          <div>
            <Button size="small" label="Writer" />
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>
            <Button size="small" label="Time" />
            <Button size="small" label="Delete" />
          </div>
        </div>
      </div>
      
    </section>
  </article>
);

Detail.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Detail.defaultProps = {
  user: null,
};
