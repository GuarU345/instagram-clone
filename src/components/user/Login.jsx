import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { signin } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    signin(formData);
  };

  const navigateToRegister = () => {
    navigate("/signup");
  };

  return (
    <main className="grid h-screen place-content-center">
      <section className="border p-4">
        <h3 className="instagram text-center text-4xl mt-4 mb-12">Instagram</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 mx-12">
          <input
            className="outline-none p-2 border rounded-md text-sm w-72"
            type="text"
            name="username"
            placeholder="Telefono, usuario o correo electronico"
          />
          <input
            className="outline-none p-2 border rounded-md text-sm w-72"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <button className="border-2 bg-sky-400 rounded-lg text-white p-2">
            Entrar
          </button>
        </form>
        <a
          href=""
          className="text-blue-900 text-center text-xs block w-72 mx-auto mt-4 pt-2 border-t"
        >
          Has olvidado la contraseña?
        </a>
      </section>

      <section className="my-4 p-4 border">
        <p className="text-center">
          No tienes una cuenta?
          <span>
            <a
              className="pl-4 text-sky-600 font-bold cursor-pointer"
              onClick={navigateToRegister}
            >
              Registrate
            </a>
          </span>
        </p>
      </section>
    </main>
  );
};

export default Login;
