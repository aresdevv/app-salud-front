// src/components/cards/AppointmentCard.jsx

export default function AppointmentCard({ hora, nombre, estado }) {
  return (
    <div className="flex items-start space-x-6 relative">
      <div className="w-24 text-center pr-10  text-sm font-medium text-gray-700">
        {hora}
      </div>

      {/* Punto en la línea del timeline */}
      <div className="w-3 h-3 bg-black rounded-full absolute left-16 top-1"></div>

      <div className="flex space-x-3">
        {/* Contenido de la cita */}
        <div className="flex flex-col gap-2.5">
          <div className="text-base font-medium text-gray-800">{nombre}</div>
          <div className="text-sm text-gray-500">Detalles de la cita...</div>
        </div>

        {/* Estado */}
        <div>
          <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-lg">
            {estado}
          </span>
        </div>
      </div>
    </div>
  );
}
