import { useState } from "react";

export default function RecipeModal({ onClose, user }) {
  const [form, setForm] = useState({
    patientId: "",
    medication: "",
    dosage: "",
    frequency: "",
    durationDays: "",
    route: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      patient_id: parseInt(form.patientId),
      doctor_id: user?.id || 1, // fallback a 1 si no hay user
      electronic_signature: user?.fullName || "Dr. Desconocido",
      observations: form.instructions,
      items: [
        {
          medication: form.medication,
          dosage: form.dosage,
          frequency: form.frequency,
          duration_days: parseInt(form.durationDays),
          administration_route: form.route,
          observations: form.instructions,
        },
      ],
    };

    try {
      const res = await fetch("http://localhost:8080/api/prescription", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Error ${res.status}: ${err}`);
      }

      alert("✅ Receta creada exitosamente");
      onClose();
    } catch (err) {
      console.error("❌ Error al crear receta:", err);
      alert("Hubo un error al guardar la receta.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"></div>

      <div className="relative bg-white p-8 rounded w-[600px] shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center">Agregar Receta Médica</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label>ID del Paciente</label>
            <input
              name="patientId"
              value={form.patientId}
              onChange={handleChange}
              placeholder="1"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label>Medicamento</label>
            <input
              name="medication"
              value={form.medication}
              onChange={handleChange}
              placeholder="Paracetamol"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label>Dosis</label>
            <input
              name="dosage"
              value={form.dosage}
              onChange={handleChange}
              placeholder="500 mg"
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="col-span-2">
            <label>Frecuencia</label>
            <input
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
              placeholder="Cada 8 horas"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label>Días de duración</label>
            <input
              name="durationDays"
              value={form.durationDays}
              onChange={handleChange}
              placeholder="7"
              className="w-full border p-2 rounded"
              type="number"
            />
          </div>

          <div>
            <label>Vía</label>
            <input
              name="route"
              value={form.route}
              onChange={handleChange}
              placeholder="Oral"
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="col-span-2">
            <label>Observaciones</label>
            <textarea
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              placeholder="Instrucciones para el paciente"
              className="w-full border p-2 rounded h-24"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button className="bg-gray-200 px-4 py-2 rounded" onClick={onClose}>
            Cancelar
          </button>
          <button className="bg-teal-700 text-white px-6 py-2 rounded" onClick={handleSubmit}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
