import React, { ReactNode, ReactElement } from 'react';

import styles from './TabSet.module.css';

type PropsType = {
  slug: string;
  name: string;
  slugs: string[];
};

type TabSetProps = {
  children: ReactNode &
    {
      props: PropsType;
    }[];
};

const TabSet = ({ children }: TabSetProps) => {
  const slugsArray: string[] = children.map((child) => {
    if (React.isValidElement(child)) {
      return child.props.slug;
    }
    return '';
  });

  const childrenWithProp: ReactNode | null = React.Children.map(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...child.props, slugs: slugsArray });
      }

      return null;
    },
  );

  return (
    <>
      <div>
        <ul className={styles.productTabs}>{childrenWithProp}</ul>
      </div>
    </>
  );
};

export default TabSet;
