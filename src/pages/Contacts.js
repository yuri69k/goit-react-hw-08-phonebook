import { Form } from '../components/Form/Form';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { ContactList } from '../components/ContactsList/ContactList';
// import { Notification } from './Notification/Notification';

const Contacts = () => {
  return (
    <>
      <Form />
      <StatusBar />
      <ContactList />
    </>
  );
};

export default Contacts;
