import InputLogin from "../../components/Login/InputLogin";
import UserIcon from "../../Icons/UserIcon";

export default function FormLogin() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border-solid border-2 border-white rounded-full p-4 mb-6">
        <UserIcon className={"size-28"} />
      </div>
      <form className="flex gap-4 flex-col justify-center items-center p-6 rounded shadow-md w-96">
        <InputLogin />
        <InputLogin />
        <button type="">kalla kchudo</button>
      </form>
    </div>
  );
}
