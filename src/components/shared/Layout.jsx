import React from "react";
import {
  PiCompassDuotone,
  PiFilmSlateDuotone,
  PiHeartBold,
  PiHouseFill,
  PiMagnifyingGlassBold,
  PiMessengerLogoDuotone,
  PiPlusSquareBold,
  PiUserCircleBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { ToastContainer } from "react-toastify";
import PostModal from "../modals/PostModal";
const links = {
  Inicio: {
    icon: <PiHouseFill />,
    href: "/home",
  },
  Busqueda: {
    icon: <PiMagnifyingGlassBold />,
    href: "#",
  },
  Explorar: {
    icon: <PiCompassDuotone />,
    href: "#",
  },
  Reels: {
    icon: <PiFilmSlateDuotone />,
    href: "#",
  },
  Mensajes: {
    icon: <PiMessengerLogoDuotone />,
    href: "#",
  },
  Notificationes: {
    icon: <PiHeartBold />,
    href: "#",
  },
  Crear: {
    icon: <PiPlusSquareBold />,
    href: "#",
  },
  Perfil: {
    icon: <PiUserCircleBold />,
    href: "/profile",
  },
};

function Layout({ children }) {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <>
      <div className="h-screen overflow-hidden flex">
        <nav className="sticky top-0 h-full border-r md:w-2/6 lg:w-3/12  xl:w-2/12 p-8 transition-all duration-700">
          <h3 className="instagram text-2xl">Instagram</h3>
          <ul className="my-8">
            {Object.keys(links).map((key) => (
              <li
                className="my-4 px-2 hover:bg-gray-100 hover:rounded-lg hover:ease-in duration-200 hover:cursor-pointer hover:scale-105"
                key={key}
              >
                <Link
                  to={links[key]["href"]}
                  className="flex items-center h-[50px] gap-4 [&>p]:text-base [&>svg]:text-3xl"
                  onClick={key === "Crear" ? openModal : ""}
                >
                  {links[key]["icon"]} <p>{key}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <PostModal isOpen={isOpen} handleClose={closeModal} />
    </>
  );
}

export default Layout;
