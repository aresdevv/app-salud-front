export default function RecipeCard() {
  return (
    <div className="bg-teal-800 text-white p-4 rounded mb-6 shadow">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <p className="font-semibold">
            Paciente: Diego Alberto Salazar Garcia
          </p>
          <p className="text-sm">Identificación: 80888088</p>
        </div>
        <p className="text-sm text-right">
          11 abril, 2025 11:14:23 pm
        </p>
      </div>

      <div className="my-4 border-t border-white/40 pt-3 space-y-2">
        <div>
          <p className="font-semibold">Paracetamol 500 miligramos</p>
          <p className="text-sm">
            1 tableta, Vía oral, 2 veces al día. Por 30 días
          </p>
        </div>
        <div>
          <p className="font-semibold">Paracetamol 500 miligramos</p>
          <p className="text-sm">
            1 tableta, Vía oral, 2 veces al día. Por 30 días
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button className="bg-white text-teal-800 px-4 py-1 rounded">
          Imprimir
        </button>
        <button className="bg-white text-teal-800 px-4 py-1 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
}
