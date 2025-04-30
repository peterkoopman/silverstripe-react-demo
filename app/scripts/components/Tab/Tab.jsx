import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import style from './Tab.module.css';

const Tab = ({ slug, name, slugs }) => {
  const path = useLocation().pathname.split('/');
  const currentSlug = path[path.length - 1];
  let isActive = false;
  !slugs.includes(currentSlug) && !slug
    ? (isActive = true)
    : (isActive = currentSlug === slug);

  return (
    <li className={style.tab}>
      <NavLink
        exact
        to={`/products/${slug}`}
        className={`${style.link} ${isActive ? style.selected : ''}`}>
        {name}
      </NavLink>
    </li>
  );
};

export default Tab;
