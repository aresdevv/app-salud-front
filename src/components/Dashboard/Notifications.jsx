import AlertIcon from "../../Icons/AlertIcon";

export default function Notifications() {
  return (
    <div className="flex flex-col ">
      <div className=" bg-primary w-70 h-34 rounded-2xl">
        <div className="flex mt-2 ml-2">
          <AlertIcon className={"text-white size-6.5"} />
          <div className="flex flex-col w-58 ml-2.5">
            <h3 className="text-white font-semibold ">
              Titulo de la notificación
            </h3>
            <p className="text-white text-xs font-light">
              Lorem viverra urna. elit. tortor. ex ipsum sollicitudin. nec elit.
              tincidunt lorem. ex placerat. Ut id ...{" "}
            </p>
            <button className="cursor-pointer ml-34 mt-1 h-10 bg-white text-black rounded-lg font-semibold w-20">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
