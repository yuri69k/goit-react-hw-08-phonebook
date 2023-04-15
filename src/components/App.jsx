
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './routes/PrivateRoute';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { fetchCurrentUser } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { routes } from './routes/routes';


const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
    const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={routes.register}
          element={<RestrictedRoute redirectTo={routes.contacts} component={<RegisterPage />} />}
        />
        <Route
          path={routes.login}
          element={<RestrictedRoute redirectTo={routes.contacts} component={<LoginPage />} />}
        />
        <Route
          path={routes.contacts}
          element={<RestrictedRoute  redirectTo={routes.login} component={<ContactsPage />} />}
        />
        <Route path={routes.notFound} element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};

// const App = () => {
//    const dispatch = useDispatch();
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
  
//   return (
//     <div className={styles.wrapper}>
//        <Header />
//       <Form />
//       <h2>Contacts</h2>
//       <StatusBar />
//         {error && <Notification message={error} />}
//       {!error && <Contacts />}
//     </div>
//   );
// };

export default App;
