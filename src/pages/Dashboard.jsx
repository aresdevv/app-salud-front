import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Componentes UI
import Sidebar from '../components/Sidebar/Sidebar';
import TopBar from '../components/TopBar/TopBar';
import AppointmentsTimeline from '../components/Appointments/AppointmentsTimeline';
import NotificationPanel from '../components/Notifications/NotificationPanel';
import QuickActions from '../components/QuickActions/QuickActions';

export default function Dashboard({ user, onLogout, onNavigate }) {
  const [appointments, setAppointments] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Título de la Notificación', body: 'Lorem viverra urna, elit tortor, ex ipsum sollicitudin…' },
    { id: 2, title: 'Título de la Notificación', body: 'Lorem viverra urna, elit tortor, ex ipsum sollicitudin…' },
    { id: 3, title: 'Título de la Notificación', body: 'Lorem viverra urna, elit tortor, ex ipsum sollicitudin…' },
  ]);

  // 🚀 Cargar citas médicas desde el backend
  useEffect(() => {
  fetch('http://localhost:8080/api/medicalAppointment', {
    method: 'GET',
    credentials: 'include', // <- ESTO ES CLAVE
  })
    .then(async res => {
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Error ${res.status}: ${errText}`);
      }
      return res.json();
    })
    .then(data => {
      const mapped = data.map(item => ({
        id: item.appointment_id,
        time: new Date(item.appintment_time).toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        patient: item.patient_name,
        status: item.status,
        reason: item.reason,
      }));
      setAppointments(mapped);
    })
    .catch(err => {
      console.error('Error cargando citas:', err);
    });
}, []);


  const handleAcceptNotification = (id) => {
    console.log('Aceptar notificación', id);
  };

  const handleCreatePrescription = () => {
    console.log('Crear receta');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onLogout={onLogout} onNavigate={onNavigate} />

      <main style={{ flex: 1, padding: '1.5rem 2.5rem', overflowY: 'auto' }}>
        <TopBar user={user} onNavigate={onNavigate} />

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <AppointmentsTimeline
            date={new Date()} // Fecha actual
            appointments={appointments}
          />

          <NotificationPanel
            notifications={notifications}
            onAccept={handleAcceptNotification}
          />
        </div>

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
