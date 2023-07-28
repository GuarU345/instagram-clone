import { toast } from "react-toastify";
import { signing } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const token = await signing(formData);
      //localStorage.setItem("token",token)
      setToken(token);
      toast.success("Inicio de sesion correcto");
      navigate("/home");
    } catch (error) {
      toast.error("Credenciales incorrectas");
    }
  };

  const navigateToRegister = () => {
    navigate("/signup");
  };

  return (
    <div className="grid h-screen place-content-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[400px] border-[1px] items-center p-4"
      >
        <h3 className="instagram text-center text-4xl mb-16">Instagram</h3>
        <section className="flex flex-col gap-2">
          <input
            className="outline-none p-2 border-2 text-sm w-[300px]"
            type="text"
            name="username"
            placeholder="Telefono, usuario o correo electronico"
          />
          <input
            className="outline-none p-2 border-2 text-sm w-[300px]"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <button
            type="submit"
            className="border-2 bg-sky-400 rounded-lg text-white p-2"
          >
            Entrar
          </button>
          <hr />
          <a href="" className="text-blue-900 text-center text-xs">
            Has olvidado la contraseña?
          </a>
        </section>
      </form>
      <section className="flex justify-center gap-2 p-4 border-2">
        <span>No tienes una cuenta?</span>
        <a
          className="text-sky-600 font-bold cursor-pointer"
          onClick={navigateToRegister}
        >
          Registrate
        </a>
      </section>
    </div>
  );
};

export default Login;
