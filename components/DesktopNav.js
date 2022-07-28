import Link from "next/link";
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

const DesktopNav = () => (
  <div>
    <div className="md:flex hidden ml-20 pt-10 space-x-5 divide-x-2 leading-8 animate-fade">
      {navItems.map((item, i) => (
        <Link key={i} href={item.link} passHref>
          <span className="hover:font-bold px-2 cursor-pointer  ">
            {" "}
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default DesktopNav;
