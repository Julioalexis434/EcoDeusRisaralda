import React from "react";
import { useContext } from "react";
import { ContextNav } from "./Context/ContextNav";
import Anchor from "./Global/Anchor";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
const Nav = () => {
  const { links, setLinks, isMenuOpen, ToggleMenu } = useContext(ContextNav);
  const Scroll = ()=>{
    window.scrollTo(0, 0);
  }
  return (
    <>
      {/* Nav Mobile */}
      <div
        className={`fixed w-full h-screen top-0 bg-black/80  transition-all duration-500 ${
          isMenuOpen ? " left-0 z-6 " : "-left-full"
        } md:hidden`}
        onClick={ToggleMenu}
      >
        <nav
          className={`fixed top-0 w-[260px] h-screen bg-white dark:bg-dark transition-all ${
            isMenuOpen ? "left-0 z-7 duration-700" : "-left-full duration-300"
          } flex flex-col pt-[10vh] gap-3`}
        >
          {links.map((link, index) => {
            return (
              <div key={index} className="flex items-center gap-2 p-2 border-b border-b-gray-400 relative">
                {link.icon}
                <Anchor
                  text={link.name}
                  url={link.url}
                  style="dark:text-white rounded-lg transition-all duration-200  absolute left-0 w-full pl-13"
                />
              </div>
            );
          })}
        </nav>
      </div>

      {/* Nav Desktop */}
      <nav className="hidden md:flex items-center gap-x-4 text-white z-10 relative">
        {links.map((link, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: link.delay }}
              onClick={()=>{
                setLinks((prevLinks) => {
                  return prevLinks.map((prevLink) => ({
                    ...prevLink,
                    current: prevLink.url === link.url,
                  }));
                });
              }}
            >
              <Anchor
                text={link.name}
                url={link.url}
                click={Scroll}
                style={`text-gray-500 hover:bg-green/30 dark:hover:bg-greenLight dark:hover:text-white rounded-lg  transition-all duration-200 py-2 px-4 ${link.current ? "bg-green/30 dark:bg-greenLight dark:text-white" : "bg-transparent" }`}
              />
            </motion.div>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
