import React from 'react';
import Tab from '../tab/Tab';

import * as styles from './TabSet.module.css';

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
          <ul className={styles.productTabs}>
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
