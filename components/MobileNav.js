import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const MobileNav = ({ toggleDarkMode, darkMode }) => {
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const toggleNavMenu = () => setNavMenuOpen((prevState) => !prevState);

  return (
    <div className="pt-5 px-7 pb-2 min-h-max md:hidden ">
      <div className="container flex">
        <button
          onClick={toggleDarkMode}
          className="text-[17px] border-2 p-2 border-sky-300 rounded-sm"
        >
          AC Solutions.
        </button>
        {!isNavMenuOpen ? (
          <button
            onClick={toggleNavMenu}
            className={`ml-auto group flex flex-col gap-[4px] leading-1 cursor-pointer mt-3`}
          >
            <>
              <span
                className={`border-2 group-hover:border-sky-200  w-10 ${
                  !darkMode && "border-[#101010] group-hover:border-[#383838]"
                }`}
              ></span>
              <span
                className={`border-2 group-hover:border-sky-200  w-10 ${
                  !darkMode && "border-[#101010] group-hover:border-[#383838]"
                }`}
              ></span>
              <span
                className={`border-2 group-hover:border-sky-200  w-10 ${
                  !darkMode && "border-[#101010] group-hover:border-[#383838]"
                }`}
              ></span>
            </>
          </button>
        ) : (
          <button
            onClick={toggleNavMenu}
            className={`ml-auto flex group flex-col gap-[7px] leading-1 cursor-pointer mt-1`}
          >
            <span
              className={`border-2 group-hover:border-sky-200 w-9 rotate-45 relative top-3   ${
                !darkMode && "border-[#101010] group-hover:border-[#383838]"
              }`}
            ></span>
            <span
              className={`border-2 group-hover:border-sky-200 w-9 -rotate-45 ${
                !darkMode && "border-[#101010] group-hover:border-[#383838]"
              }`}
            ></span>
          </button>
        )}
      </div>
      {isNavMenuOpen && (
        <div className="grid mt-7  leading-8 text-xl animate-fade">
          {navItems.map((item, i) => (
            <Link key={i} href={item.link} passHref>
              <span className="hover:shadow-sm font-[times] cursor-pointer hover:shadow-sky-400 ">
                {" "}
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
