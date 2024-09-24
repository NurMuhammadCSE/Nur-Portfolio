import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle";
import MobileNavDropdown from "./MobileNavDropdown";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div>
      {/* <img alt="logo" src="/p2logo.png" className={`w-16 ${className}`} /> */}
      <h1 className={`w-16 ${className} text-xl font-semibold`}>Nur</h1>{" "}
    </div>
  );
};

export const navLinks = [
  {
    label: "About",
    href: "/about",
    mobile: true,
  },
  {
    label: "Projects",
    href: "/portfolio",
    mobile: true,
  },
  {
    // label: <Logo />,
    label: "NUR",
    href: "/",
    mobile: false,
  },
  {
    label: "Blogs",
    href: "/blog",
    mobile: true,
  },
  {
    label: "Contact",
    href: "/contact",
    mobile: true,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link className="text-xl font-semibold" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        <Link href="/">
          <Logo className="md:hidden" />
        </Link>
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
