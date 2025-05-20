import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import style from './Families.module.css';
import { fetchFamilies } from '../../../services/apiService';

const Families = () => {
  const [families, setFamilies] = useState<{ Slug: string; Title: string }[]>(
    [],
  );

  useEffect(() => {
    getFamilies();
  }, []);

  const getFamilies = async () => {
    try {
      const data = await fetchFamilies();
      setFamilies(data);
    } catch (error) {
      console.error('Error fetching families:', error);
    }
  };

  return (
    <>
      <section data-testid="families" className={style.families}>
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
