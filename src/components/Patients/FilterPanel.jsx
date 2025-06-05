import { useState } from "react";

export default function FilterPanel({ onApply, onClear }) {
  const [gender, setGender] = useState({ M: false, F: false });
  const [age, setAge] = useState([0, 100]);
  const [disease, setDisease] = useState("");
  const [center, setCenter] = useState("");

  const handleRange = (index, value) => {
    const next = [...age];
    next[index] = Number(value);
    setAge(next);
  };

  const clearAll = () => {
    setGender({ M: false, F: false });
    setAge([0, 100]);
    setDisease("");
    setCenter("");
    onClear?.();
  };

  return (
    <aside className="w-64 pr-6 border-r">
      <h3 className="text-lg font-semibold mb-4">GÉNERO</h3>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          checked={gender.M}
          onChange={(e) => setGender({ ...gender, M: e.target.checked })}
        />
        <span>Masculino</span>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="checkbox"
          checked={gender.F}
          onChange={(e) => setGender({ ...gender, F: e.target.checked })}
        />
        <span>Femenino</span>
      </div>

      <h3 className="text-lg font-semibold mb-4">RANGO DE EDADES</h3>
      <div className="flex flex-col gap-2 mb-6">
        <input
          type="range"
          min={0}
          max={100}
          value={age[0]}
          onChange={(e) => handleRange(0, e.target.value)}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={age[1]}
          onChange={(e) => handleRange(1, e.target.value)}
        />
        <div className="flex gap-2">
          <input
            className="w-1/2 border p-1 rounded text-center"
            value={age[0]}
            readOnly
          />
          <input
            className="w-1/2 border p-1 rounded text-center"
            value={age[1]}
            readOnly
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">ENFERMEDAD</h3>
      <input
        className="w-full border p-2 rounded mb-6"
        placeholder="Diabetes"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
      />

      <h3 className="text-lg font-semibold mb-2">CENTRO DE ATENCIÓN</h3>
      <input
        className="w-full border p-2 rounded mb-6"
        placeholder="EsSalud"
        value={center}
        onChange={(e) => setCenter(e.target.value)}
      />

      <button
        className="w-full bg-primary text-white py-2 rounded mb-3"
        onClick={() =>
          onApply?.({
            gender,
            age,
            disease,
            center,
          })
        }
      >
        APLICAR FILTROS
      </button>
      <button
        className="w-full border border-gray-400 py-2 rounded"
        onClick={clearAll}
      >
        ELIMINAR FILTROS
      </button>
    </aside>
  );
}
