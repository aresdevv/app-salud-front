import InputLogin from "../../components/Login/InputLogin";
import UserIcon from "../../Icons/UserIcon";

export default function FormLogin() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border-solid border-2 border-white rounded-full p-4 mb-6">
        <UserIcon className={"size-28 text-white "} />
      </div>
      <form className="flex gap-4 flex-col justify-center items-center p-6 rounded  w-72">
        <InputLogin placeholder={"Username"} type={"text"} />
        <InputLogin placeholder={"Password"} type={"password"} />
        <button
          className="bg-white w-full rounded-lg h-10 font-bold cursor-pointer"
          type=""
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
