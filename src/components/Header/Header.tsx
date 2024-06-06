import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
// import { SearchIcon } from "@heroicons/react/outline";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import ToggleDarkMode from "./ToggleDarkMode";

export default function Header() {
  return (
    <Popover className="relative bg-white border-t-2 border-red-700 dark:bg-gray-850 shadow-md ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 md:justify-between md:space-x-10">
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white mr-4 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6 dark:text-gray-300" aria-hidden="true" />
                </Popover.Button>
              </div>
              <NavBar />
              <div className="flex justify-around flex-1 hidden xl:flex">
                {/* <div className="text-black flex items-center flex-1 justify-end">
                  <div className="border rounded overflow-hidden flex bg-white dark:bg-black dark:border-black">
                    <button className="flex items-center justify-center px-1 outline-none">
                      <SearchIcon className="text-gray-500 w-5 mx-2 dark:text-gray-300" />
                    </button>
                    <input
                      type="text"
                      className="px-2 py-2 outline-none text-base font-medium text-gray-500 dark:bg-black
                        dark:text-gray-300"
                      placeholder="Search for music you love!"
                      style={{ width: "300px", maxWidth: "350px" }}
                    />
                  </div>
                </div> */}
                <div className="hidden md:flex items-center flex-1 justify-end">
                  <ToggleDarkMode />
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
              <MobileMenu />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
