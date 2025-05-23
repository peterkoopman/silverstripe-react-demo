import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Button.module.css';

interface ButtonProps {
  route: string;
  name: string;
  active: boolean;
}

const Button = ({ route, name, active }: ButtonProps) => {
  return (
    <>
      <li className={`${style.button} ${active && style.active}`}>
        <NavLink to={'/products/' + route}>{name}</NavLink>
      </li>
    </>
  );
};

export default Button;
