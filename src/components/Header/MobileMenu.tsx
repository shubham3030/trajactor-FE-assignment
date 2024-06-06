import React from "react";
import { MyMusic } from "./HeaderData";

const MobileMenu = () => {
  return (
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="mt-6">
          <nav className="grid gap-y-8">
            {MyMusic.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-m-3 p-3 flex items-center rounded-md hover:bg-red-50 dark:hover:bg-gray-800">
                <item.icon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-100">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
