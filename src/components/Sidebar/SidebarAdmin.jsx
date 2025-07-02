import styles from './Sidebar.module.css';
import { FaTachometerAlt, FaUserInjured, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SidebarAdmin({ onLogout }) {
  const navigate = useNavigate();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo} />
      <nav className={styles.menu}>
        <button className={styles.item} onClick={() => navigate("/dashboard")}>
          <FaTachometerAlt /> Dashboard
        </button>
        <button className={styles.item} onClick={() => navigate("/pacientes")}>
          <FaUserInjured /> Citas Médicas
        </button>
      </nav>
      <button className={styles.logout} onClick={onLogout}>
        <FaSignOutAlt />Cerrar Sesión 
      </button>
    </aside>
  );
}