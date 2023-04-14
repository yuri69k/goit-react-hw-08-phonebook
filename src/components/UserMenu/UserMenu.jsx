// import { useDispatch } from 'react-redux';
//import { logOut } from 'redux/auth/operations';
//import { useAuth } from 'hooks';
import styles from './UserMenu.module.scss';

export const UserMenu = () => {
  //const dispatch = useDispatch();
  //const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, </p>
      <button type="button" className={styles.button}>
        Logout
      </button>
    </div>
  );
};
