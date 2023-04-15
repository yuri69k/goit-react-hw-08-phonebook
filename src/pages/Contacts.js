import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Form } from '../components/Form/Form';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { ContactList } from '../components/ContactList/ContactList';
// import { Notification } from './Notification/Notification';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Form />
      <StatusBar />
      <ContactList />
    </>
  );
};

export default Contacts;
