import styles from './Sidebar.module.css';
import { FaTachometerAlt, FaUserInjured, FaPrescription, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ onLogout, onNavigate }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo} />
      <nav className={styles.menu}>
        <button className={styles.item} onClick={() => onNavigate("dashboard")}>
          <FaTachometerAlt /> Dashboard
        </button>
        <button className={styles.item} onClick={() => onNavigate("pacientes")}>
          <FaUserInjured /> Pacientes
        </button>
        <button className={styles.item} disabled>
          <FaPrescription /> Recetas
        </button>
      </nav>
      <button className={styles.logout} onClick={onLogout}>
        <FaSignOutAlt />Cerrar Sesión 
      </button>
    </aside>
  );
}