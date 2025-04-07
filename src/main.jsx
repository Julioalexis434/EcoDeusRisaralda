import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProviderNav } from "./Components/Context/ContextNav.jsx";
import { ProviderDestinations } from "./Components/Context/ContextDestinations.jsx";
import { ProvideAccesibility } from "./Components/Context/ContextAccessibility.jsx";
import { ThemeProvider } from "./Components/Context/ThemeContext.jsx";
import { AuthProvider } from "./Components/Context/AuthContext.jsx";
import { ProviderNewPlace } from "./Components/Context/ContextNewPlace.jsx";
import { ProviderFavorite } from "./Components/Context/ContextFavorite.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProviderNav>
      <ProvideAccesibility>
        <ProviderDestinations>
          <ThemeProvider>
            <ProviderNewPlace>
              <ProviderFavorite>
                <App />
              </ProviderFavorite>
            </ProviderNewPlace>
          </ThemeProvider>
        </ProviderDestinations>
      </ProvideAccesibility>
    </ProviderNav>
  </AuthProvider>
);
