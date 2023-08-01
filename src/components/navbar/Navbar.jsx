import {
  PiHouseFill,
  PiMagnifyingGlassBold,
  PiCompassDuotone,
  PiFilmSlateDuotone,
  PiMessengerLogoDuotone,
  PiHeartBold,
  PiPlusSquareBold,
} from "react-icons/pi";
import NavbarItem from "./navbarcomponents/NavbarItem";
import "../../App.css";
import PostModal from "../modals/PostModal";
import { useModal } from "../hooks/useModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const navigate = useNavigate();

  const createPost = () => {
    openModal();
    document.body.style.overflow = "hidden";
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="pl-1 w-[345px] h-full border-r-2">
      <nav className="p-[20px] fixed">
        <h3 className="instagram pb-10 text-2xl">Instagram</h3>
        <ul className="flex flex-col gap-5">
          <NavbarItem title="Inicio" onClick={goToHome}>
            <PiHouseFill />
          </NavbarItem>
          <NavbarItem title="Busqueda">
            <PiMagnifyingGlassBold />
          </NavbarItem>
          <NavbarItem title="Explorar">
            <PiCompassDuotone />
          </NavbarItem>
          <NavbarItem title="Reels">
            <PiFilmSlateDuotone />
          </NavbarItem>
          <NavbarItem title="Mensajes">
            <PiMessengerLogoDuotone />
          </NavbarItem>
          <NavbarItem title="Notificaciones">
            <PiHeartBold />
          </NavbarItem>
          <NavbarItem onClick={createPost} title="Crear">
            <PiPlusSquareBold />
          </NavbarItem>
          <NavbarItem title="Perfil" onClick={goToProfile}></NavbarItem>
        </ul>
      </nav>
      <PostModal isOpen={isOpen} handleClose={closeModal} />
    </div>
  );
};

export default Navbar;
