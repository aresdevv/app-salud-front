import RecetaIcon from "../../Icons/RecetaIcon";

export default function QuickAccess() {
  return (
    <div className="flex flex-col gap-6 mt-6 pl-3">
      <h3> Acessos rápidos</h3>
      <div className="cursor-pointer flex flex-col items-center border-dashed border-2 rounded-lg w-40 h-38">
        <h3 className="mt-4 font-medium">Crear receta</h3>
        <RecetaIcon className={" w-12 h-12 text-primary mt-4 "} />
      </div>
    </div>
  );
}
