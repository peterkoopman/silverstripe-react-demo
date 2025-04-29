import React from 'react';

import style from './Product.module.css';

const Product = ({ image, code, title }) => {
  return (
    <>
      <li className="product">
        <div
          className="product--image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="product--title">
          <p>{code}</p>
          <p>{title}</p>
        </div>
      </li>
    </>
  );
};

export default Product;
