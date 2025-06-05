import { useState } from "react";

export default function AddPatientModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    dni: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };

  const handleSubmit = async () => {
  try {
    const payload = {
      first_name: form.firstName,
      last_name: form.lastName,
      dni: form.dni,
      birth_date: new Date(form.birthDate).toISOString(), // convierte a "YYYY-MM-DDTHH:mm:ssZ"
      gender: form.gender,
      address: form.address,
      phone: form.phone,
      email: form.email,
      photo_url: "default", // fijo como en tu ejemplo
    };

    const res = await fetch("http://localhost:8080/api/patient", {
      method: "POST",
      credentials: "include", // importante para pasar cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Error ${res.status}: ${err}`);
    }

    const result = await res.json();
    console.log("Paciente creado:", result);

    alert("Paciente creado exitosamente");
    onClose(); // cerrar modal
  } catch (error) {
    console.error("Error al crear paciente:", error);
    alert("Hubo un error al guardar el paciente");
  }
};


return (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Fondo difuminado y oscurecido */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"></div>

    {/* Modal con animación */}
    <div className="relative bg-white p-8 rounded w-[600px] shadow-lg animate-fadeIn">

      <h2 className="text-2xl font-bold mb-6 text-center">Agregar Paciente</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Documento</label>
          <input
            name="dni"
            value={form.dni}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="DNI..."
          />
        </div>
        <div className="flex items-end">
          <button className="bg-teal-700 text-white px-4 py-2 rounded w-full">
            Buscar Información
          </button>
        </div>

        <div>
          <label>Nombres</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nombres..."
          />
        </div>
        <div>
          <label>Apellidos</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Apellidos..."
          />
        </div>

        <div>
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Género</label>
          <div className="flex gap-4 mt-2">
            <label>
              <input
                type="checkbox"
                name="gender"
                value="M"
                checked={form.gender === "M"}
                onChange={handleChange}
              />{" "}
              Masculino
            </label>
            <label>
              <input
                type="checkbox"
                name="gender"
                value="F"
                checked={form.gender === "F"}
                onChange={handleChange}
              />{" "}
              Femenino
            </label>
          </div>
        </div>

        <div>
          <label>Dirección</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Dirección..."
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Teléfono..."
          />
        </div>

        <div className="col-span-2">
          <label>Correo</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Correo..."
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button
          className="bg-teal-700 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
);

}
