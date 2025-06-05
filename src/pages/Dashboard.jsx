import PropTypes from 'prop-types';

// Componentes UI
import Sidebar from '../components/Sidebar/Sidebar';
import TopBar from '../components/TopBar/TopBar';
import AppointmentsTimeline from '../components/Appointments/AppointmentsTimeline';
import NotificationPanel from '../components/Notifications/NotificationPanel';
import QuickActions from '../components/QuickActions/QuickActions';

/**
 * Vista principal tras el login.
 * Recibe el objeto `user` y la función `onLogout` desde App.jsx.
 */
export default function Dashboard({ user, onLogout, onNavigate }) {
  /* Ejemplo de datos simulados  ----------------------------- */
  const appointments = [
    { id: 1, time: '8:00 AM',  patient: 'Diego Salazar Garcia', status: 'Pendiente' },
    { id: 2, time: '9:00 AM',  patient: 'Diego Salazar Garcia', status: 'Pendiente' },
    { id: 3, time: '10:00 AM', patient: 'Diego Salazar Garcia', status: 'Pendiente' },
    { id: 4, time: '11:00 AM', patient: 'Diego Salazar Garcia', status: 'Pendiente' },
    { id: 5, time: '12:00 PM', patient: 'Diego Salazar Garcia', status: 'Pendiente' },
    { id: 6, time: '1:00 PM',  patient: 'Diego Salazar Garcia', status: 'Pendiente' },
    { id: 7, time: '2:00 PM',  patient: 'Diego Salazar Garcia', status: 'Pendiente' },
  ];

  const notifications = [
    { id: 1, title: 'Título de la Notificación', body: 'Lorem viverra urna, elit tortor, ex ipsum sollicitudin…' },
    { id: 2, title: 'Título de la Notificación', body: 'Lorem viverra urna, elit tortor, ex ipsum sollicitudin…' },
    { id: 3, title: 'Título de la Notificación', body: 'Lorem viverra urna, elit tortor, ex ipsum sollicitudin…' },
  ];
  /* -------------------------------------------------------- */

  /* Handlers */
  const handleAcceptNotification = (id) => {
    console.log('Aceptar notificación', id);
    // TODO: actualizar estado o llamar API
  };

  const handleCreatePrescription = () => {
    console.log('Crear receta');
    // TODO: Navegar a módulo de recetas
  };

  /* Render -------------------------------------------------- */
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onLogout={onLogout} onNavigate={onNavigate} />

      <main style={{ flex: 1, padding: '1.5rem 2.5rem', overflowY: 'auto' }}>
        <TopBar user={user} onNavigate={onNavigate} />

        {/* Cuerpo principal */}
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <AppointmentsTimeline
            date={new Date(2025, 3, 10)}   /* 10-abril-2025 */
            appointments={appointments}
          />

          <NotificationPanel
            notifications={notifications}
            onAccept={handleAcceptNotification}
          />
        </div>

        {/* Accesos rápidos */}
        <div style={{ marginTop: '3rem' }}>
          <QuickActions onCreatePrescription={handleCreatePrescription} />
        </div>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};
