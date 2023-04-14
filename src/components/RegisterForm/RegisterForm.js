import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter your name"
        />
      </label>

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

      <button className={styles.button} type="submit">
        Sign up
      </button>
    </form>
  );
};
