import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import styles from './AppBar.module.scss';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={styles.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
