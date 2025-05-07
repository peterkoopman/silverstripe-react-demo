import React from 'react';

import style from './Product.module.css';
import { Link } from 'react-router-dom';

interface ProductProps {
  image: string;
  code: string;
  title: string;
  link: string;
}

const Product = ({ image, code, title, link }: ProductProps) => {
  return (
    <>
      <Link to={link} className={style.product}>
        <div
          className={style.productImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={style.productTitle}>
          <p>{code}</p>
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
};

export default Product;
