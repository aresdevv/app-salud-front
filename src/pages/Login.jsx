import FormLogin from "./sections/Login/FormLogin";

export function Login({ onSuccess }) {
  return (
    <main className="bg-primary min-h-screen grid place-items-center">
      <FormLogin onSuccess={onSuccess} />
    </main>
  );
}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};