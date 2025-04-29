import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Button.module.css';

const Button = ({ route, name }) => {
  return (
    <>
      <li className={style.button}>
        <NavLink exact to={'/products/' + route}>
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default Button;
