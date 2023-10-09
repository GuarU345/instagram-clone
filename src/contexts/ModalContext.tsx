import React, { PropsWithChildren, createContext, useState } from "react";

interface ModalElement {
  [key: string]: React.ElementType;
}

interface ModalProperties {
  id: string;
  props?: any;
}

interface ModalContextState {
  show: (id: string, props?: any) => void;
  hide: () => void;
  register: (id: string, element: React.ElementType) => void;
}

const initialState: ModalContextState = {
  show: () => {},
  hide: () => {},
  register: () => {},
};

interface ModalProviderProps {
  modals: ModalElement;
}

export const ModalContext = createContext<ModalContextState>(initialState);

export function ModalProvider({
  children,
  modals,
}: PropsWithChildren<ModalProviderProps>) {
  const [store, setStore] = useState<ModalElement>(modals);
  const [modal, setModal] = useState<ModalProperties | null>(null);

  const show = (id: string, props?: any) => {
    setModal({ id, props });
  };

  const register = (id: string, element: React.ElementType) => {
    if (store[id] !== undefined) return;

    setStore({ ...store, [id]: element });
  };

  const hide = () => {
    setModal(null);
  };

  const render = () => {
    if (modal === null) return null;

    const SelectedModal = store[modal.id];

    return <SelectedModal id={modal.id} {...modal.props} />;
  };

  return (
    <ModalContext.Provider value={{ register, show, hide }}>
      {render()}
      {children}
    </ModalContext.Provider>
  );
}
