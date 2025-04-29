import React from 'react';

import './Product.scss';

function Product(props) {
  return <>
    <li className="product">
      <div className="product--image" style={{ backgroundImage: `url(${props.image})` }} />
      <div className="product--title">
        <p>{ props.code }</p>
        <p>{ props.title }</p>
      </div>
    </li>
  </>
}

export default Product;