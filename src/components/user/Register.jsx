import { toast } from "react-toastify";
import { signup } from "../../services/auth";

const Register = () => {

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    try {
      await signup(formData)
      toast.success("Usuario registrado correctamente")
      document.getElementById("registerForm").reset()
    } catch (error) {
      toast.error("Algo salio mal")
    }
  }

  return (
  <div className="h-screen grid place-content-center">
    <form onSubmit={handleSubmit} id="registerForm" className="w-[300px] flex flex-col justify-center gap-6 border-2 pt-4 pb-4 pl-6 pr-6">
      <h3 className="instagram text-4xl text-center">Instagram</h3>
      <p className="text-center">Registrate para ver fotos y videos de tus amigos.</p>
      <hr />
      <section className="flex flex-col gap-2">
        <input className="outline-none border-2 p-2" type="text" name="email" placeholder="correo electrónico" />
        <input className="outline-none border-2 p-2" type="text" name="firstName" placeholder="Nombre completo" />
        <input className="outline-none border-2 p-2" type="text" name="lastName" placeholder="Apellidos" />
        <input className="outline-none border-2 p-2" type="text" name="username" placeholder="Nombre de usuario" />
        <input className="outline-none border-2 p-2" type="password" name="password" placeholder="Contraseña" />
      </section>
      <button className="bg-sky-400 p-2 rounded-md text-white">Registrarte</button>
    </form>
  </div>
  )
};

export default Register;
