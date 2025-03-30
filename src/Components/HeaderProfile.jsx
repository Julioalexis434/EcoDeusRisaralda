import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import {TitleH2} from "./Global/ContainerTitle";
import ContainerText, {} from "./Global/ContainerText";

const HeaderProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="p-2 text-black dark:text-white">
      <div className="h-[150px] w-full bg-gray-200 dark:bg-dark2 rounded-tl-lg rounded-tr-lg"></div>
      <div className="h-[150px] w-full bg-white dark:bg-dark rounded-bl-lg rounded-br-lg relative py-2 pl-40 shadow-xl">
        <div>
          {isAuthenticated ? (
            <img
              src={`${user?.picture}`}
              alt=""
              className="w-30 h-30 bg-gray-300 dark:bg-gray-600 rounded-full absolute -top-1/2 left-2 object-contain"
            />
          ) : (
            <div className="w-30 h-30 bg-gray-300 dark:bg-gray-600 rounded-full absolute -top-1/2 left-2"></div>
          )}

          <div>
            <TitleH2 text={user?.name} style="font-medium text-xl dark:text-white" />
        
            <ContainerText
              text={user?.email}
              style={"text-gray-700 dark:text-gray-300 text-sm"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
