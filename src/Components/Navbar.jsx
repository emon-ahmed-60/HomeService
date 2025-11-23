"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  const pathName = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <div className="bg-primary rounded-sm p-2 w-12 flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house-icon lucide-house"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </div>
          <p className="text-black">
            Home
            <span className="text-primary">Service</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => {
            const isActive =
              pathName === link.href ||
              (pathName.startsWith(link.href) && link.href !== "/");
            return (
              <li
                className={isActive ? "text-blue-500 underline" : ""}
                key={link.name}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
