import { useLocation } from 'react-router-dom';
import Crumb from '../Crumb/Crumb';
import style from './Breadcrumbs.module.css';
import { useContext, useState, useEffect } from 'react';

const generateTrail = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  let path = '';
  const breadcrumbSegments = segments.map((segment, index) => {
    path += `/${segment}`;
    return {
      path: path,
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
    };
  });
  return breadcrumbSegments;
};

const Breadcrumbs = () => {
  const location = useLocation();
  const [segments, setSegments] = useState<{ path: string; name: string }[]>(
    [],
  );

  useEffect(() => {
    setSegments(generateTrail(location.pathname));
  }, [location]);

  return (
    <div data-testid="breadcrumbs" className={style.breadcrumbs}>
      {segments.map((segment, index) => (
        <Crumb key={index} url={segment.path} name={segment.name} />
      ))}
    </div>
  );
};

export default Breadcrumbs;
