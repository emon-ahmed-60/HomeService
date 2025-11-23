import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      className='bg-neutral p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white container mx-auto px-5'
    >
      <div>
        <h6 className="footer-title">
          {" "}
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
            <p className="text-base-100">
              Home
              <span className="text-primary">Service</span>
            </p>
          </Link>{" "}
        </h6>
        <p>
          HomeService is a modern web application that connects users with trusted
          local service providers such as electricians, plumbers, and cleaners.
          Users can browse services, book appointments, and leave ratings, while
          providers can manage their listings.
        </p>
      </div>
      <ul className="md:ml-auto lg:mx-auto">
        <h6 className="footer-title">Useful Links</h6>
        <li className="list-none link link-hover mb-2"> Blog </li>
        <li className="list-none link link-hover mb-2"> About Us </li>
        <li className="list-none link link-hover mb-2"> Terms & Condition </li>
        <li className="list-none link link-hover mb-2"> Privacy & Policy </li>
      </ul>

      <ul>
        <h6 className="footer-title">social links</h6>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link href="/" className="flex gap-2 items-center">
             Facebook{" "}
          </Link>{" "}
        </li>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link href="/" className="flex gap-2 items-center">
             Twitter
          </Link>{" "}
        </li>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link href="/" className="flex gap-2 items-center">
            Linkedin{" "}
          </Link>{" "}
        </li>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link href="/" className="flex gap-2 items-center">
             Instagram
          </Link>{" "}
        </li>
      </ul>
      <p className="text-center mt-7 pt-7 md:col-span-2 lg:col-span-3 border-t">
        Copyright © 2025 - All right reserved
      </p>
    </footer>
  );
}
