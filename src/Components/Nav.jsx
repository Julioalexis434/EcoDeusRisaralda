import React from "react";
import { useContext } from "react";
import { ContextNav } from "./Context/ContextNav";
import Anchor from "./Global/Anchor";
import { motion } from "framer-motion";
const Nav = ({ style }) => {
  const { links } = useContext(ContextNav);
  return (
    <nav
      className={`justify-center z-10 bg-white gap-2  ${style} dark:bg-dark dark:text-white`}
    >
      {links.map((link, i) => {
        return (
          <motion.li
            initial={{ transform: "-translateY(20em)", opacity: 0   }}
            animate={{ transform: "translateY(0em)", opacity: 1}}
            transition={{ duration: 1, delay: link.delay }}
            className="list-none"
          >
            <Anchor
              key={i}
              text={link.name}
              url={link.url}
              style="inline-block px-4 py-2 hover:bg-greenLight hover:text-white rounded-lg"
            />
          </motion.li>
        );
      })}
    </nav>
  );
};

export default Nav;
