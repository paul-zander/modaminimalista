import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import Logo from "../assets/images/logo.svg";
import Search from "./Search.jsx";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          isActive ? "bg-slate-100 py-4 shadow-md" : "bg-none p-6"
        } fixed w-full z-10 translate-all duration-300`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between h-full">
          {/* logo */}
          <Link to={"/"}>
            <div>
              <img className="h-[60px]" src={Logo} alt="" />
            </div>
          </Link>
          {/* searchbar */}
          <Search isActive={isActive} />
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative py-2 sm:py-0 gap-8"
          >
            <BsBag className="text-2xl " />
            <div className="bg-slate-800 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
