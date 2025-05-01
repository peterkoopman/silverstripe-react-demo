import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../Button/Button';
import Product from '../Product/Product';

import style from './Groups.module.css';

interface ProductType {
  Code: string;
  Title: string;
  ImageFilename: string;
}

interface GroupType {
  Title: string;
  Slug: string;
}

const Groups = () => {
  const { family, group } = useParams();
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    if (group) {
      getProducts();
    } else {
      setGroups([]);
      setProducts([]);
      setGroupName('');
    }
    if (family) {
      getGroups();
    }
  }, [family, group]);

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
        setGroupName(data[0]);
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
      });
  };
  console.log(groups, group);
  return (
    <>
      <section className={style.groups}>
        <h2>{groupName}</h2>
        <ul className={style.list} role="list">
          {groups.map((groupSelection, index) => (
            <Button
              key={index}
              route={`${family}/${groupSelection.Slug}`}
              name={groupSelection.Title}
              active={groupSelection.Slug === group}
            />
          ))}
        </ul>
      </section>
      {products.length > 0 && (
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
      )}
    </>
  );
};

export default Groups;
