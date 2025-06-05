// src/components/Sidebar/Sidebar.jsx
import styles from './Sidebar.module.css';
import { FaTachometerAlt, FaUserInjured, FaPrescription, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ onLogout }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo} />
      <nav className={styles.menu}>
        <a className={styles.item} href="#"><FaTachometerAlt /> Dashboard</a>
        <a className={styles.item} href="#"><FaUserInjured /> Pacientes</a>
        <a className={styles.item} href="#"><FaPrescription /> Recetas</a>
      </nav>
      <button className={styles.logout} onClick={onLogout}>
        <FaSignOutAlt /> Cerrar Sesión
      </button>
    </aside>
  );
}
