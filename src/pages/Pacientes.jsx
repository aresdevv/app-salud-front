import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import FilterPanel from "../components/Patients/FilterPanel";
import PatientCard from "../components/Patients/PatientCard";
import Pagination from "../components/Patients/Pagination";
import RecipeModal from "../components/modal/RecipeModal";
import AddPatientModal from "../components/modal/AddPatientModal";

export default function Pacientes({ onLogout, onNavigate, user }) {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    fetch("http://localhost:8080/api/patient", {
      method: "GET",
      credentials: "include", 
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        // Mapear a formato esperado por PatientCard
        const mapped = data.map((p) => ({
          id: p.patient_id,
          fullName: p.full_name,
          age: p.age,
          gender: p.gender === "M" ? "Masculino" : "Femenino",
          lastVisit: "Hace poco", // puedes reemplazar esto si tienes un campo real
        }));
        setPatients(mapped);
      })
      .catch((err) => {
        console.error("Error al cargar pacientes:", err);
      });
  }, []);

  const filtered = patients; // puedes conectar esto con el buscador y filtros
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const handleCreatePatient = (newPatient) => {
    console.log("Enviar al backend:", newPatient);

    fetch("http://localhost:8080/api/patient", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatient),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al guardar paciente");
        return res.json();
      })
      .then((data) => {
        alert("Paciente registrado con éxito");
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error al guardar");
      });
  };
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar onLogout={onLogout} onNavigate={onNavigate} />

        <main className="flex-1 p-8">
          <header className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-bold">Lista de Pacientes</h1>

            <button
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              <span className="material-symbols-outlined text-base text-xl">+</span>
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

          {/* layout principal */}
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

      {/* Modal para agregar paciente */}
      {showModal && (
        <AddPatientModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreatePatient}
        />
      )}
    </>
  );

}
