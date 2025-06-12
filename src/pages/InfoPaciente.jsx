import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const TABS = [
  "Diagnósticos",
  "Tratamientos",
  "Notas Médicas",
  "Resultados de laboratorios",
  "Vacunas",
  "Antecedentes",
];

const DIAGNOSTICOS = [
  {
    fecha: "12 de Octubre del 2024",
    titulo: "Hipertensión Arterial Primaria (HTA)",
    descripcion:
      "El paciente presenta una presión arterial elevada de manera crónica sin una causa secundaria identificada, lo que corresponde a la hipertensión primaria. En las últimas mediciones, se ha registrado una presión sistólica de 150 mmHg ...",
  },
  {
    fecha: "12 de Octubre del 2024",
    titulo: "Hipertensión Arterial Primaria (HTA)",
    descripcion:
      "El paciente presenta una presión arterial elevada de manera crónica sin una causa secundaria identificada, lo que corresponde a la hipertensión primaria. En las últimas mediciones, se ha registrado una presión sistólica de 150 mmHg ...",
  },
];

export default function InfoPaciente({ onLogout, user }) {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#232126]">
      <Sidebar onLogout={onLogout} onNavigate={navigate} />
      <main className="flex-1 bg-[#f3f3f7] rounded-r-xl  ml-0 px-10 py-8 flex flex-col">
        {/* Botón volver */}
        <button
          className="mb-4 flex items-center gap-2 text-[#35727b] hover:underline w-fit"
          onClick={() => navigate("/pacientes")}
        >
          <span className="text-2xl">&#8592;</span> Volver
        </button>
        <div className="flex gap-8">
          {/* Card paciente */}
          <div className="bg-[#e9e9ee] rounded-xl p-8 w-80 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
            <div className="text-lg font-bold text-center mb-2">Salazar Garcia<br />Diego Alberto</div>
            <div className="text-sm mb-2"><b>Edad:</b> 18 años</div>
            <div className="text-sm mb-2"><b>DNI:</b> 75245495</div>
            <div className="text-sm font-semibold mt-4 mb-1">Contacto de emergencia</div>
            <div className="text-sm mb-1">📞 999-999-999</div>
            <div className="text-sm mb-4">📍 Dirección del paciente</div>
            <hr className="w-full my-2 border-gray-400" />
            <div className="text-sm font-semibold mt-2 mb-1">Alergias</div>
            <ul className="text-sm list-disc ml-5">
              <li>Alergia a mujeres</li>
            </ul>
          </div>
          {/* Panel derecho */}
          <div className="flex-1 flex flex-col">
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-400 mb-4">
              {TABS.map((t, i) => (
                <button
                  key={t}
                  className={`py-2 px-1 font-semibold border-b-2 transition-colors duration-200 ${tab === i ? "border-[#35727b] text-[#35727b]" : "border-transparent text-gray-700 hover:text-[#35727b]"}`}
                  onClick={() => setTab(i)}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* Contenido de cada tab */}
            <div className="flex-1">
              {tab === 0 && (
                <div>
                  {/* Diagnósticos timeline */}
                  {DIAGNOSTICOS.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-4 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-5 h-5 bg-[#35727b] rounded-full mt-2" />
                        {idx < DIAGNOSTICOS.length - 1 && (
                          <div className="w-1 bg-gray-400 flex-1" style={{ minHeight: 60 }} />
                        )}
                      </div>
                      <div>
                        <div className="text-sm text-gray-700 mb-1">{d.fecha}</div>
                        <div className="bg-[#ededf2] rounded-lg p-4">
                          <div className="font-bold mb-1">{d.titulo}</div>
                          <div className="text-sm text-gray-700">{d.descripcion}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="mt-4 bg-[#35727b] text-white px-6 py-2 rounded font-semibold">Agregar nuevo diagnóstico</button>
                </div>
              )}
              {tab === 1 && (
                <div className="text-gray-700">No hay tratamientos registrados.</div>
              )}
              {tab === 2 && (
                <div className="text-gray-700">No hay notas médicas registradas.</div>
              )}
              {tab === 3 && (
                <div className="text-gray-700">No hay resultados de laboratorio registrados.</div>
              )}
              {tab === 4 && (
                <div className="text-gray-700">No hay vacunas registradas.</div>
              )}
              {tab === 5 && (
                <div className="text-gray-700">No hay antecedentes registrados.</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 