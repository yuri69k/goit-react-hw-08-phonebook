import bookIcon from '../images/phonebook.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  span: {
    position: 'relative',
    top: 26,
  },
  icon: {
    height: 48,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => (
  <Box style={styles.container}>
    <Typography variant="h3" align="center" mb={8}>
      <span style={styles.span}>
        <img src={bookIcon} alt="phonebook icon" className={styles.icon} />
      </span>
      &nbsp; Welcome to the Phonebook!
    </Typography>
    <Typography variant="h6" align="center">
      Please, register or log in to continue.
    </Typography>
  </Box>
);

export default Home;
