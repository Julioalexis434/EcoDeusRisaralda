import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProviderNav } from "./Components/Context/ContextNav.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProviderDestinations } from "./Components/Context/ContextDestinations.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-m15at27kdds3udvc.us.auth0.com"
    clientId="4aZuHbCIqCfyy5zB4L3Y2fviI7uttjxj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProviderNav>
      <ProviderDestinations>
        <App />
      </ProviderDestinations>
    </ProviderNav>
  </Auth0Provider>
);
