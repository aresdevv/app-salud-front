import SectionTitle from "../../components/Dashboard/SectionTitle";
import AppointmentCard from "../../components/Dashboard/AppointmentCard";

export default function Appointments() {
  const citas = [
    { hora: "8:00 AM", nombre: "Diego Salazar García", estado: "Pendiente" },
    { hora: "9:00 AM", nombre: "Diego Salazar García", estado: "Pendiente" },
    { hora: "9:00 AM", nombre: "Diego Salazar García", estado: "Pendiente" },
    { hora: "9:00 AM", nombre: "Diego Salazar García", estado: "Pendiente" },
    { hora: "9:00 AM", nombre: "Diego Salazar García", estado: "Pendiente" },
    { hora: "9:00 AM", nombre: "Diego Salazar García", estado: "Pendiente" },
  ];

  return (
    <div className="pl-4 ">
      <SectionTitle title="Citas del jueves 10 de Abril del 2025" />
      <div className="relative">
        {/* Timeline decorativo (línea vertical) */}
        <div className="absolute left-[109px] top-0 h-full w-px bg-gray-300"></div>

        {/* Lista de citas */}
        <div className="ml-10 space-y-6">
          {citas.map((cita, i) => (
            <AppointmentCard
              key={i}
              hora={cita.hora}
              nombre={cita.nombre}
              estado={cita.estado}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
