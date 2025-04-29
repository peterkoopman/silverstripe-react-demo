import React from 'react';

import style from './Product.module.css';

const Product = ({ image, code, title }) => {
  return (
    <>
      <li className={style.product}>
        <div
          className={style.productImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={style.productTitle}>
          <p>{code}</p>
          <p>{title}</p>
        </div>
      </li>
    </>
  );
};

export default Product;
