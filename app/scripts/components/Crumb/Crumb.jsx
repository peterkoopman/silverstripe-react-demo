import { Link } from 'react-router';
import style from './Crumb.module.css';

const Crumb = ({ url, name }) => {
  return (
    <Link className={style.crumb} to={url}>
      {name}
    </Link>
  );
};

export default Crumb;
