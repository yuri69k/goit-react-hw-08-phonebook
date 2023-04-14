import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your email"
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your password"
          />
        </label>
      </div>

      <button className={styles.button} type="submit">
        Log in
      </button>
    </form>
  );
};
