import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

interface MenuTypes {}
const FooterMenu = (props: MenuTypes): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className="flex justify-between items-center text-gray-600 dark:text-gray-200 flex-wrap border-t border-gray-700 footer-menu"
        data-testid="footer menu">
        <div className="flex justify-center lg:justify-start items-center m-w-xl py-5 flex-1">
          <p className="text-gray-500 dark:text-gray-300">
            Developed by: Shubham Mittal | Senior Software Engineer
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-center m-w-xl py-5 flex-1">
          <p className="border border-gray-500 rounded-full px-3 py-1 cursor-pointer mx-3 hover:text-blue-800">
            <FontAwesomeIcon icon={faGithub} />
          </p>
          <p className="border border-gray-500 rounded-full px-2 py-1 mx-3 cursor-pointer hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} />
          </p>
          <p className="border border-gray-500 rounded-full px-2.5 py-1 mx-3 cursor-pointer hover:text-red-500">
            <FontAwesomeIcon icon={faLinkedin} />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterMenu;
