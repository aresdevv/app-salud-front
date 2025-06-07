import Avatar from "../../components/Dashboard/Avatar";
import NavDash from "../../components/Dashboard/NavDash";
import Notifications from "../../components/Dashboard/Notifications";
import QuickAccess from "../../components/Dashboard/QuickAccess";
import AlertIcon from "../../Icons/AlertIcon";
import RecetaIcon from "../../Icons/RecetaIcon";
import Appointments from "./Appointments";

export default function HomeMedico() {
  return (
    <div className="flex gap-13">
      <NavDash />
      <div className="flex flex-row pl-4 justify-between w-full">
        <div className="flex flex-col gap-7">
          <Avatar />
          <div>
            <Appointments />
          </div>
          <QuickAccess />
        </div>
        <div className="flex">
          <div className="bg-black w-0.5 h-[480px] mt-24 mr-3"></div>
          <div className="flex flex-col pr-60 pt-24 gap-3">
            <h2 className="font-bold text-lg">Notificaciones</h2>

            <Notifications />
            <Notifications />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}
