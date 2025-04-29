import React from 'react';
import Tab from '../tab/Tab';

import style from './TabSet.module.css';

class TabSet extends React.Component {
  tabs = [
    {
      slug: '',
      name: 'Product Catalogue',
    },
    {
      slug: 'promos',
      name: 'Promotions',
    },
    {
      slug: 'agencies',
      name: 'Agencies',
    },
    {
      slug: 'quality',
      name: 'Quality',
    },
    {
      slug: 'datasheets',
      name: 'Datasheets',
    },
  ];

  render() {
    return (
      <>
        <div>
          <ul className={style.product__tabs}>
            {this.tabs.map((tab, index) => (
              <Tab key={index} slug={tab.slug} name={tab.name} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TabSet;
