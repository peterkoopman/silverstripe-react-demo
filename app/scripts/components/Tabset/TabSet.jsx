import React from 'react';

import * as styles from './TabSet.module.css';

const TabSet = ({ children }) => {
  const slugsArray = children.map((child) => {
    if (React.isValidElement(child)) {
      return child.props.slug;
    }
  });
  const childrenWithProp = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, slugs: slugsArray });
    }
    return child; // Return non-element children as they are
  });
  return (
    <>
      <div>
        <ul className={styles.productTabs}>{childrenWithProp}</ul>
      </div>
    </>
  );
};

export default TabSet;
