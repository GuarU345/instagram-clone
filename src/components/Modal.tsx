import { PropsWithChildren, useEffect } from "react";
import useModal from "../hooks/useModal";

function Modal({ children }: PropsWithChildren) {
  const { hide } = useModal();

  const close = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      hide();
      document.body.style.overflow = "scroll";
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="absolute flex flex-col top-0 left-0 h-full w-full bg-black bg-opacity-50">
      {children}
    </div>
  );
}

export default Modal;
