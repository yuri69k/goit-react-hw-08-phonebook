import bookIcon from '../images/phonebook.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  container: {
  position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '740px',
    width: '100%',
  },
  span: {
    position: 'relative',
    top: 76,
    right:20,
  },
  icon: {
 
    height: 160,
  },
  title: {
    
    fontWeight: 800,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => (
  <Box style={styles.container}>
    <Typography variant="h3" align="center" mb={8}>
      <span style={styles.span}>
        <img src={bookIcon} alt="phonebook icon" style={styles.icon} />
      </span>
     Welcome to the Magic Phone book!
    </Typography>
    <Typography variant="h6" align="center">
      Please, register or log in to continue.
    </Typography>
  </Box>
);

export default Home;
