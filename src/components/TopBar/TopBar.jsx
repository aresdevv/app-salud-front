// src/components/TopBar/TopBar.jsx
import styles from './TopBar.module.css';

export default function TopBar({ user }) {
  return (
    <header className={styles.topbar}>
      <div className={styles.avatar} />
      <h2>{user.fullName}</h2>
    </header>
  );
}
