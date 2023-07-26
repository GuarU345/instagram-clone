import { createContext, useState } from "react";

export const openPostModalContext = createContext(null);

const OpenPostModalProvider = ({ children }) => {
  const [openPostModal, setOpenPostModal] = useState(false);
  return (
    <openPostModalContext.Provider value={{ openPostModal, setOpenPostModal }}>
      {children}
    </openPostModalContext.Provider>
  );
};

export default OpenPostModalProvider;
