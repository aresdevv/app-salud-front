import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AgregarCitaMedicaModal from "../components/modal/AgregarCitaMedicaModal";

const horas = [
  "9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM"
];
const dias = [
  { nombre: "Domingo", fecha: 6 },
  { nombre: "Lunes", fecha: 6 },
  { nombre: "Martes", fecha: 6 },
  { nombre: "Miércoles", fecha: 6 },
];

export default function CitasMedicas({ onLogout, onNavigate, user }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#232126]">
      <Sidebar onLogout={onLogout} onNavigate={onNavigate} />
      <main className="flex-1 bg-[#f3f3f7] rounded-r-xl  ml-0 px-10 py-8 flex flex-col">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Citas Médicas</h1>
          <button
            className="bg-[#35727b] text-white rounded-lg px-5 py-2 text-[15px]"
            onClick={() => setShowModal(true)}
          >
            + Agregar Cita Médica
          </button>
        </header>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-[#35727b]">Abril 2025</h2>
          <div className="flex gap-2">
            <button className="bg-[#35727b] text-white rounded px-3 py-1">{'<'}</button>
            <button className="bg-[#35727b] text-white rounded px-3 py-1">Hoy</button>
            <button className="bg-[#35727b] text-white rounded px-3 py-1">{'>'}</button>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          {/* Horas */}
          <div className="flex flex-col gap-5 mt-10 mr-2">
            {horas.map((hora) => (
              <div key={hora} className="h-16 flex items-center text-[#a0a0a0] text-base font-medium">{hora}</div>
            ))}
          </div>
          {/* Días y slots */}
          {dias.map((dia) => (
            <div key={dia.nombre} className="flex flex-col gap-3 flex-1">
              <div className="text-center font-bold text-[#35727b] mb-2">{dia.nombre} {dia.fecha}</div>
              {horas.map((hora, i) => (
                <div key={hora + i} className="bg-[#35727b] rounded-lg h-16 mb-0.5" />
              ))}
            </div>
          ))}
        </div>
        {showModal && (
          <AgregarCitaMedicaModal onClose={() => setShowModal(false)} />
        )}
      </main>
    </div>
  );
} 