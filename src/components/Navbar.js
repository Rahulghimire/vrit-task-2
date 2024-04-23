import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="mb-3">
      <nav className="border-gray-200  border-b-[2px] p-2">
        <div className="max-w-screen-xl">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li className="active:text-[red]">
                <a
                  href="/"
                  className="active:!text-[yellow] !capitalize text-[#292561] hover:underline"
                >
                  Task 1
                </a>
              </li>
              <li className="active:text-[red]">
                <a
                  href="/task2"
                  className="!capitalize text-[#292561] active:!text-[yellow] hover:underline"
                >
                  Task 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
