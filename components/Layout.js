import Head from "next/head";
import MobileNav from "./MobileNav";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
const Layout = ({ title, description, children, darkMode }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content={description ? description : "Anthony Costanzo Portfolio"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? title : "Anthony Costanzo"}</title>
      </Head>

      <div
        className={`${
          !isDarkMode ? "border-8 border-[#181818]" : "border-gray-200 border-4"
        }`}
      >
        <div
          className={`animate-fade min-h-screen
      bg-[#232222] text-gray-200 ${!isDarkMode ? "hidden" : "visible "}`}
        >
          {" "}
          <MobileNav darkMode={isDarkMode} />
          <DesktopNav />
          {children}
        </div>

        <div
          className={`animate-fade min-h-screen
      bg-slate-50 text-gray-800 ${isDarkMode ? "hidden" : "visible "}`}
        >
          <MobileNav />
          <DesktopNav />
          {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
