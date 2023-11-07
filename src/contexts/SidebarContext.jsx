import { useState, createContext } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseSidebar() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleCloseSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
export { SidebarContext };
