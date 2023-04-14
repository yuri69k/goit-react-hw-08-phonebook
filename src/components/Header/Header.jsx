import styles from './Header.module.css';
import phonebookIcon from '../../images/phonebook.png';
export const Header = () => {
  return (
    <h1 className={styles.header}>
      
       <span>
          <img src={phonebookIcon} alt="phonebook icon" className={styles.icon} />
       </span>  
         &nbsp; Welcome to the phonebook    
    </h1>
  );
};
