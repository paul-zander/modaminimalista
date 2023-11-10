import { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
export { ModalContext };
