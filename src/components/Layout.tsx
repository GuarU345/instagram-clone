import { GoHomeFill } from "react-icons/go";
import { BsPlusSquare } from "react-icons/bs";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import useModal from "../hooks/useModal";
import { ModalNames } from "./Modals";

export default function Layout({ children }: PropsWithChildren) {
  const { show } = useModal();

  return (
    <div className="h-screen">
      <div className="flex">
        <nav className="w-[245px] border-r fixed h-full px-6">
          <h1 className="instagram text-3xl my-12 px-2">Instagram</h1>
          <menu className="[&>li]:flex [&>li]:items-center [&>li]:gap-4 [&>li]:text-lg [&>li]:font-medium [&>li]:my-2">
            <li className="hover:bg-gray-100 py-3 px-2 rounded-md [&>svg]:text-3xl">
              <GoHomeFill />
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-gray-100 py-3 px-2 rounded-md [&>svg]:text-2xl">
              <BsPlusSquare />
              <button onClick={() => show(ModalNames.CREATE_POST)}>
                Create
              </button>
            </li>
            <li className="hover:bg-gray-100 py-3 px-2 rounded-md [&>svg]:text-2xl">
              <FaRegUserCircle />
              <Link to="/">Profile</Link>
            </li>
          </menu>
        </nav>
        <main className="left-[245px] relative w-[calc(100%-245px)]">{children}</main>
      </div>
    </div>
  );
}
