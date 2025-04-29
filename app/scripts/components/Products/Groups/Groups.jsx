import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../Button/Button';
import Product from '../Product/Product';

import style from './Groups.module.css';

const Groups = () => {
  const { family, group } = useParams();
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [productTab, setProductTab] = useState();

  useEffect(() => {
    if (group) {
      getProducts();
    } else if (family) {
      getGroups();
    }
  }, [family, group]);

  // useEffect(() => {
  //   setProductTab(
  //     document.querySelector('.product__tabs--tablist > li:first-child > a'),
  //   );
  //   productTab.classList.add('selected');
  // }, [family]);

  const getGroups = () => {
    const url = `/api/products/category/${family}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGroups(data[1]);
      });
  };

  const getProducts = () => {
    const url = `/api/products/group/${group}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGroupName(data[0]);
        setProducts(data[1]);
        setTimeout(() => {
          setUpdateProducts(true);
        }, 800);
      });
  };

  return (
    <>
      <section className={style.groups}>
        <ul className={style.list} role="list">
          {groups.map((group, index) => (
            <Button
              key={index}
              route={`${family}/${group.Slug}`}
              name={group.Title}
            />
          ))}
        </ul>
      </section>
      <section className={style.products}>
        <ul className={style.productList} role="list">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.ImageFilename}
              code={product.Code}
              title={product.Title}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Groups;
