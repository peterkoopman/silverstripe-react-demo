import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import style from './Tab.module.css';

interface TabProps {
  slug: string;
  name: string;
  slugs: string[];
}

const Tab = ({ slug, name, slugs }: TabProps) => {
  const path = useLocation().pathname.split('/');
  const currentSlug = path[path.length - 1];
  let isActive = false;
  !slugs.includes(currentSlug) && !slug
    ? (isActive = true)
    : (isActive = currentSlug === slug);

  return (
    <li className={style.tab}>
      <NavLink
        to={`/products/${slug}`}
        className={`${style.link} ${isActive ? style.selected : ''}`}>
        {name}
      </NavLink>
    </li>
  );
};

export default Tab;
