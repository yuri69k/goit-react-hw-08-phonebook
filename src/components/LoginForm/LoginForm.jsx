import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputRoundedIcon from '@mui/icons-material/InputRounded';
import { Notification } from 'components/Notification/Notification';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Login form
        </Typography>
        <TextField
          label="Email"
          variant="standard"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Enter your email"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="standard"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          endIcon={<InputRoundedIcon />}
          className={styles.submitButton}
        >
          Log in
        </Button>
      </form>

      {error && <Notification message="Wrong login or password." />}
    </>
  );
};
