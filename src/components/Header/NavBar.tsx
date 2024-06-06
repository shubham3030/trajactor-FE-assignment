// eslint-disable-next-line
import React, { Fragment, MutableRefObject, useRef } from "react";
import { Popover } from "@headlessui/react";
interface Props {
  DarkMode?: boolean;
}

const NavBar = ({ DarkMode }: Props) => {
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-8 items-end" data-testid="navigation">
      <a
        href="#"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300">
        SongBook
      </a>
    </Popover.Group>
  );
};

export default NavBar;
