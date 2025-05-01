import { Link } from 'react-router';
import style from './Crumb.module.css';

interface CrumbProps {
  url: string;
  name: string;
}

const Crumb = ({ url, name }: CrumbProps) => {
  return (
    <Link className={style.crumb} to={url}>
      {name}
    </Link>
  );
};

export default Crumb;
