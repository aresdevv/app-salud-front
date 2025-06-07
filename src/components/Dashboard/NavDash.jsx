import DashIcon from "../../Icons/DashIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import PacienteIcon from "../../Icons/PacienteIcon";
import RecetaIcon from "../../Icons/RecetaIcon";

export default function NavDash() {
  return (
    <aside className="flex flex-col gap-8 justify-between items-center pt-4 min-h-screen bg-secondary w-40 text-white">
      <nav className="flex flex-col gap-4  ">
        <div className="w-32 bg-white flex justify-center items-center h-18 rounded-lg text-black">
          <span className="text-center font-bold">Diego y Yahaira</span>
        </div>

        <a className="flex cursor-pointer w-full px-3 py-2 hidden:inline hover:bg-white hover:text-black rounded-lg transition-colors">
          <DashIcon />
          <span>DashBoard</span>
        </a>
        <a className="flex cursor-pointer w-full px-3 py-2 hidden:inline hover:bg-white hover:text-black rounded-lg transition-colors">
          <PacienteIcon />
          <span>Pacientes</span>
        </a>
        <a className="flex cursor-pointer w-full px-3 py-2 hidden:inline hover:bg-white hover:text-black rounded-lg transition-colors">
          <RecetaIcon />
          <span>Recetas</span>
        </a>
      </nav>
      <button
        type=""
        className="flex items-center gap-1.5 cursor-pointer mx-4.5 mb-5  hidden:inline hover:bg-white hover:text-black rounded-lg transition-colors"
      >
        <LogoutIcon />
        Cerrar Sesion
      </button>
    </aside>
  );
}
