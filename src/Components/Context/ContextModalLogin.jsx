import { createContext, useState } from "react";

export const ContextModalLogin = createContext();

export function ProviderModalLogin({ children }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const toggleLoginModal = (message = "") => {
        setModalMessage(message);
        setShowLoginModal(!showLoginModal);
    };


  return (
    <ContextModalLogin.Provider value={{ showLoginModal, toggleLoginModal, modalMessage }}>
      {children}
    </ContextModalLogin.Provider>
  );
}
