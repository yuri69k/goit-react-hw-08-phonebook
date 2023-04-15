import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount} from 'redux/contacts/selectors';
import { sortContactsAz,deleteAllContacts,
  sortContactsAzReverse,
 } from '../../redux/contacts/contactsSlice';
import { Filter } from '../Filter/Filter';
import styles from './StatusBar.module.css';
import sortIcon from '../../images/sort-az.png';
import trashIcon from '../../images/trash.png';

import { useState } from 'react';

export const StatusBar = () => {
  const [sorted, setSorted] = useState({ sortedAlphabetically: false, sortedByDate: false });
  const dispatch = useDispatch();
  const { total } = useSelector(selectContactsCount);
 
  const handleDeleteAllContacts = () => {
    dispatch(deleteAllContacts());
  };

  const handleSortAzContacts = () => {
    if (sorted.sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsAz());
      setSorted({ sortedAlphabetically: true, sortedByDate: false });
    }
  };

 

  return (
    <div className={styles.StatusBar}>
      <div className={styles.infoSection}>
        <div className={styles.counter}>
         
          <p className={styles.counter__data}>
             You have {total} {total === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        {total > 0 && (
          <div className={styles.buttons}>
            <button className={styles.button_sort}
              type="button"
              title={sorted.sortedAlphabetically ? 'Sort by name Z-A' : 'Sort by name A-Z'}
              onClick={handleSortAzContacts}>
              <img src={sortIcon} alt="sort icon" className={styles.icon} />
            </button>
            <button className={styles.button_delete}
              type="button"
              title='Delete All Contacts'
              onClick={handleDeleteAllContacts}>
              <img src={trashIcon} alt="trash icon" className={styles.icon} />
            </button>
            {/* <button
              className={styles.button_sort}
              type="button"              
              title={sorted.sortedByDate ? 'Sort by date added reverse' : 'Sort by date added'}
              onClick={handleSortDateContacts}
            >
              <img src={ sortDateIcon} alt="sort date icon" className={styles.icon} />
            </button> */}
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
