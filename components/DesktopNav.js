import Link from "next/link";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
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
  <>
    <div className="md:inline-block hidden p-2 font-[Times] text-[18px] space-x-5 divide-x-2 animate-fade">
      {navItems.map((item, i) => (
        <Link key={i} href={item.link} passHref>
          <span className="hover:font-bold mt-10 px-2 cursor-pointer  ">
            {" "}
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  </>
);

export default DesktopNav;
