import styles from "../styles/space.module.css";

import { useState } from "react";
import MobileNav from "../components/MobileNav";
import Layout from "../components/Layout";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="relative h-screen bg-gray-900 ">
        <div className="h-full bg-red-200 opacity-70 left-0 right-0 absolute animate-small md:animate-hero bg-[url('/space.jpg')] bg-bottom md:bg-center bg-no-repeat overflow-hidden"></div>
        <div className="z-1 text-slate-50 relative"></div>
        <div className="items-center flex h-1/3 font-bold  z-1 mx-4 md:ml-8 md:h-1/2 text-[28px] lg:text-[40px] ">
          <div className={`${styles.wrapper} text-gray-100 flex flex-col`}>
            <div className={`${styles.static}  text-[#f2f2f2] w-max relative`}>
              {`Hi, I'm Anthony Costanzo,`}
            </div>
            <ul className={`${styles.dynamic} text-[25px]  text-[#f2f2f2]`}>
              <li>
                <span>Software Engineer,</span>
              </li>
              <li>
                <span>Full-Stack Developer,</span>
              </li>
              <li>
                <span>And Cloud Architect</span>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
