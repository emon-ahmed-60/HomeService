"use client";
import Link from "next/link";
import { useAuth } from "@/../lib/authContext";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, LogOut } = useAuth();
  const pathName = usePathname();
  const handleSignOut = () => {
    LogOut()
      .then(() => {
        toast.success("LogOut Successfull");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto px-5 sticky top-0 z-50">
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
            {publicLinks.map((link) => {
            return (
              <li
                className={
                  pathName === link.href ? "text-blue-500 underline" : ""
                }
                key={link.href}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
          {user && (
            <>
            <li
              className={
                pathName === "/add-service" ? "text-blue-500 underline" : ""
              }             
              >
              <Link href="/add-service">Add Service</Link>
            </li>
            <li
              className={
                pathName === "/manage-service" ? "text-blue-500 underline" : ""
              }             
              >
              <Link href="/manage-service">Manage Service</Link>
            </li>
              </>
          )}
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
          <p className="text-black hidden md:block">
            Home
            <span className="text-primary">Service</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {publicLinks.map((link) => {
            return (
              <li
                className={
                  pathName === link.href ? "text-blue-500 underline" : ""
                }
                key={link.href}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
          {user && (
            <>
            <li
              className={
                pathName === "/add-service" ? "text-blue-500 underline" : ""
              }             
              >
              <Link href="/add-service">Add Service</Link>
            </li>
            <li
              className={
                pathName === "/manage-service" ? "text-blue-500 underline" : ""
              }             
              >
              <Link href="/manage-service">Manage Service</Link>
            </li>
              </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn bg-primary text-white">
            SignOut
          </button>
        ) : (
          <Link href="/login" className="btn bg-primary text-white">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}
