import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FollowTheSignsTwoToneIcon from '@mui/icons-material/FollowTheSignsTwoTone';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '18px', marginLeft: 'auto' }}>
      <Typography variant="subtitle1">Hi {user.name}, you are logged in</Typography>
      <Tooltip title="Logout" placement="bottom" arrow>
        <IconButton onClick={() => dispatch(logOut())}>
          <FollowTheSignsTwoToneIcon  />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
