"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleActive, toggleLogin } from "../contextSlice";

const Nav = ({ handleToggleIcon, isLightMode }) => {
  const isActive = useSelector((state) => state.contextSlice.isActive);
  const dispatch = useDispatch();
  const [isNav, setIsNav] = useState(false);

  const [currentLink, setCurrentLink] = useState("home");

  const handleScroll = (section) => {
    if (["home", "about", "contact"].includes(section)) {
      setCurrentLink(section);
    } else {
      setCurrentLink("");
    }

    switch (section) {
      case "home":
        // homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        // aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        // contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-[var(--nav-color)] md:hidden sticky top-0 z-[500] md:px-24 px-8 py-4">
        <div className="font-medium flex items-center justify-between">
          <Link
            href="/"
            style={{ fontFamily: "cursive" }}
            className="text-[20px]"
          >
            DLawNet
          </Link>

          <div className="flex">
            <label
              onClick={handleToggleIcon}
              class="relative h-8 w-12 pt-1 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
              for="switch"
            >
              <div>
                {isLightMode ? <FaRegSun size={15} /> : <FaMoon size={15} />}
              </div>
            </label>
            <div onClick={() => setIsNav((nav) => !nav)}>
              {isNav ? <IoMdCloseCircle size={25} /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile screen */}
      {isNav && (
        <div
          className={`${
            isNav
              ? "translate-x-0 md:hidden fixed transition-transform duration-700 h-full bg-black z-10 inset-0 bg-opacity-75"
              : "-translate-x-full transition-transform duration-700"
          }`}
        >
          <div className="bg-[var(--nav-color)] w-[40%] h-screen flex flex-col pt-24 px-8 space-y-8">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="text-[var(--text-color)] block">
                Home
              </Link>
              <Link
                href="#about"
                className="text-[var(--text-color)] block border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              >
                About
              </Link>
              <Link
                onClick={() => dispatch(toggleLogin())}
                href="/"
                className="text-[var(--text-color)] block border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                onClick={() => dispatch(toggleActive())}
                href="/"
                className="text-[var(--text-color)] block border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              >
                Register
              </Link>
              <Link
                href="#contact"
                className="text-[var(--text-color)] block border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Large screen */}
      <div className="bg-[var(--nav-color)] hidden md:block sticky top-0 z-[500] px-24 py-4">
        <div className="flex justify-between gap-44 font-medium">
          <Link
            href="/"
            style={{ fontFamily: "cursive" }}
            className="text-[20px]"
          >
            DLawNet
          </Link>
          <div className="flex justify-between font-semibold gap-8 text-[14px]">
            <label
              onClick={handleToggleIcon}
              class="relative h-8 w-12 pt-1 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
              for="switch"
            >
              <div>
                {isLightMode ? <FaRegSun size={15} /> : <FaMoon size={15} />}
              </div>
            </label>

            <Link
              className={`${
                currentLink === "home"
                  ? "border-b-2 border-[var(--brown-color)]"
                  : ""
              }`}
              onClick={() => handleScroll("home")}
              href="#home"
            >
              Home
            </Link>
            <Link
              className={`${
                currentLink === "about" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleScroll("about")}
              href="#about"
            >
              About
            </Link>
            <Link onClick={() => dispatch(toggleLogin())} href="/">
              Login
            </Link>
            <Link onClick={() => dispatch(toggleActive())} href="/">
              Register
            </Link>
            <Link
              className={`${
                currentLink === "contact" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleScroll("contact")}
              href="#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
