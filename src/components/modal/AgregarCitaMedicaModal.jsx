import React, { useRef, useEffect } from "react";

export default function AgregarCitaMedicaModal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-[#f3f3f7] rounded-xl shadow-lg p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8">Agregar Cita Médica</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block font-semibold mb-1">Paciente</label>
            <input className="w-full border rounded px-3 py-2" placeholder="Diego Alberto ...." disabled />
          </div>
          <div>
            <label className="block font-semibold mb-1">Médico</label>
            <input className="w-full border rounded px-3 py-2" placeholder="Diego Alberto...." disabled />
          </div>
          <div>
            <label className="block font-semibold mb-1">Fecha</label>
            <input className="w-full border rounded px-3 py-2" placeholder="20 / 12 / 2024" disabled />
          </div>
          <div>
            <label className="block font-semibold mb-1">Hora</label>
            <input className="w-full border rounded px-3 py-2" placeholder="10:00" disabled />
          </div>
          <div>
            <label className="block font-semibold mb-1">Motivo</label>
            <input className="w-full border rounded px-3 py-2" placeholder="Motivo para la consulta..." disabled />
          </div>
          <div className="flex gap-4 mt-6">
            <button type="button" className="flex-1 bg-[#35727b] text-white py-2 rounded" onClick={onClose}>
              Aceptar
            </button>
            <button type="button" className="flex-1 border border-gray-400 py-2 rounded" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 