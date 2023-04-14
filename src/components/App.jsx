// import styles from './styles.module.css';
// import Form from '../Form';
// import Contacts from '../Contacts';
// import { StatusBar } from '../StatusBar/StatusBar';
// import { Header } from '../Header/Header';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/contacts/operations'
// import { selectError } from '../../redux/contacts/selectors';
// import { Notification } from '../Notification/Notification';
// import { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
    return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
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
