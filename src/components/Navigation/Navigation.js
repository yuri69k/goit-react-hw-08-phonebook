import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import Tooltip from '@mui/material/Tooltip';

const styles = {
  link: {
    marginLeft: '15px',
    position: 'relative',

    '&:hover': {
      color: '#5252d7',
    },

    '&.active::after': {
      content: '""',
      display: 'block',
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      backgroundColor: ' #5252d7',
      position: 'absolute',
      bottom: '0',
      left: '0',
      boxShadow: '0 0 10px 1px #5252d7',
      opacity: 0.2,
    },
  },
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link component={NavLink} to="/" sx={styles.link}>
        <Tooltip title="Home" placement="bottom" arrow>
          <IconButton>
            <CottageRoundedIcon />
          </IconButton>
        </Tooltip>
      </Link>
      {isLoggedIn && (
        <Link component={NavLink} to="/contacts" sx={styles.link}>
          <Tooltip title="Contacts" placement="bottom" arrow>
            <IconButton>
              <ContactPhoneRoundedIcon />
            </IconButton>
          </Tooltip>
        </Link>
      )}
    </nav>
  );
};
