import React from "react";
import { motion } from "framer-motion";
import { TitleH2 } from "./ContainerTitle";
import ContainerText from "./ContainerText";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-white dark:bg-dark2 text-gray-800 dark:text-gray-200 py-8 mt-auto relative z-6"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-start  justify-start lg:justify-evenly gap-8 p-4">
        <div className="space-y-4">
          <TitleH2 text="EcoDeusRisaralda" style="text-greenDark dark:text-greenLight text-xl" />
          <ContainerText
            text="Descubre la magia natural de Risaralda con nosotros."
            style="text-gray-600 dark:text-gray-400"
          />
        </div>

        <div className="space-y-4">
          <TitleH2 text="Enlaces Rápidos" style="text-greenDark dark:text-greenLight text-xl" />
          <ul className="space-y-2">
            <li>
              <a href="/destinations" className="hover:text-greenDark dark:hover:text-greenLight transition-colors">
                Destinos
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-greenDark dark:hover:text-greenLight transition-colors">
                Perfil
              </a>
            </li>
            <li>
              <a href="/settings" className="hover:text-greenDark dark:hover:text-greenLight transition-colors">
                Configuración
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
        <ContainerText
          text="© 2024 EcoDeusRisaralda. Todos los derechos reservados."
        />
        <Link to="/politicsAndPrivacity" className = "underline hover:text-green transition-colors">
            Política de Privacidad
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;