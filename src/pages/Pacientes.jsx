import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import FilterPanel from "../components/Patients/FilterPanel";
import PatientCard from "../components/Patients/PatientCard";
import Pagination from "../components/Patients/Pagination";

// 🔸 datos simulados
const MOCK_PATIENTS = [
  {
    id: 1,
    fullName: "Diego Alberto Salazar Garcia",
    age: 15,
    gender: "Masculino",
    lastVisit: "1 semana",
  },
  {
    id: 2,
    fullName: "Diana Arias Yazid",
    age: 30,
    gender: "Femenino",
    lastVisit: "1 semana",
  },
  // …añade los que necesites
];

export default function Pacientes() {
  const [patients] = useState(MOCK_PATIENTS);
  const [page, setPage] = useState(1);
  const perPage = 6;

  // aquí aplicarías los filtros de FilterPanel
  const filtered = patients; // ← sin lógica real por ahora

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <header className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold">Lista de Pacientes</h1>

          {/* botón agregar */}
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded">
            <span className="material-symbols-outlined text-base">add</span>
            Agregar Paciente
          </button>
        </header>

        {/* buscador */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Buscar por nombre / DNI / código del paciente
          </label>
          <input
            type="text"
            placeholder="Diego Alberto Salazar..."
            className="w-full border rounded p-2"
          />
        </div>

        {/* layout principal con panel de filtros + grid */}
        <div className="flex gap-8">
          <FilterPanel
            onApply={(data) => console.log("filtrar con:", data)}
            onClear={() => console.log("limpiar filtros")}
          />

          <section className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((p) => (
                <PatientCard
                  key={p.id}
                  patient={p}
                  onView={() => console.log("ver", p)}
                />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={setPage}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
