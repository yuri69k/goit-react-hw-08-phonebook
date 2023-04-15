import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const styles = {
  link: {
    padding: '12px',
    position: 'relative',

    '&:hover': {
      color: '#5252d7',
    },

    '&.active::after': {
      content: '""',
      display: 'block',
      width: 'calc(100% - 24px)',
      height: '2px',
      backgroundColor: '#5252d7',
      position: 'absolute',
      bottom: '8px',
      left: '12px',
      boxShadow: '0 0 10px 1px #5252d7',
      opacity: 0.6,
    },
  },
};

export const AuthNav = () => (
  <Box
    sx={{
      marginLeft: 'auto',
    }}
  >
    <Link component={NavLink} to="/register" sx={styles.link}>
      Register
    </Link>
    <Link component={NavLink} to="/login" sx={styles.link}>
      Login
    </Link>
  </Box>
);
