import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import style from './Families.module.css';

const Families = () => {
  const [families, setFamilies] = useState<{ Slug: string; Title: string }[]>(
    [],
  );

  useEffect(() => {
    getFamilies();
  }, []);

  const getFamilies = () => {
    const url = '/api/products/categories';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFamilies(data);
      });
  };

  return (
    <>
      <section className={style.families}>
        <ul className={style.list} role="list">
          {families.map((family, index) => (
            <Button key={index} route={family.Slug} name={family.Title} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Families;
