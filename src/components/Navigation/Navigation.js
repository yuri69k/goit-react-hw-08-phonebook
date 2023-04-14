import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>

      <NavLink className={styles.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
