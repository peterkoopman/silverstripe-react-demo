import React from 'react';

import style from './Product.module.css';
import { Link } from 'react-router';

interface ProductProps {
  image: string;
  code: string;
  title: string;
  link: string;
}

const Product = ({ image, code, title, link }: ProductProps) => {
  return (
    <Link className={style.product} to={link}>
      <li>
        <div
          className={style.productImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={style.productTitle}>
          <p>{code}</p>
          <p>{title}</p>
        </div>
      </li>
    </Link>
  );
};

export default Product;
