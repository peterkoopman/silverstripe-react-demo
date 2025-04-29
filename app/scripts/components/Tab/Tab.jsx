import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Tab.module.css';

function Tab(props) {
  return (
    <>
      <li className={style.tab}>
        <NavLink
          exact
          to={'/products/' + props.slug}
          activeClassName="selected">
          {props.name}
        </NavLink>
      </li>
    </>
  );
}

export default Tab;
