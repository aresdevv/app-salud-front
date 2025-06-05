import InputLogin from "../../components/Login/InputLogin";
import UserIcon from "../../Icons/UserIcon";
import { useState } from "react";

export default function FormLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border-solid border-2 border-white rounded-full p-4 mb-6">
        <UserIcon className={"size-28 text-white"} />
      </div>
      <form
        className="flex gap-4 flex-col justify-center items-center p-6 rounded  w-72"
        onSubmit={handleSubmit}
      >
        <InputLogin
          placeholder={"Username"}
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputLogin
          placeholder={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-white w-full rounded-lg h-10 font-bold" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}