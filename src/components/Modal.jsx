import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

function Modal() {
  const { isVisible, setIsVisible } = useContext(ModalContext);

  if (!isVisible) return null;

  return (
    <div
      onClick={() => setIsVisible(!isVisible)}
      className="fixed inset-0 flex items-center justify-center bg-white/80 z-50"
    >
      <div className="bg-white p-10 lg:p-20 border-2 border-slate-900 flex justify-center items-center flex-col gap-10">
        {/* Hier füge den Inhalt deines Modals ein */}
        <p>YOU MUST SELECT A SIZE</p>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="border-2 border-slate-900 px-5 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
