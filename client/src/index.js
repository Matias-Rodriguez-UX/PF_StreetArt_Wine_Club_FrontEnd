import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import {  } from "@auth0/auth0-react";
import axios from "axios";
// const { user, isAuthenticated } = useAuth0();
// const { isLoading, isAuthenticated: auth, user } = useAuth0();

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('user');

axios.defaults.baseURL = 'https://pfstreetartwineclubbackend-production.up.railway.app';

const domain = "dev-eqjids43tpn0c5lj.us.auth0.com";
const clientId = "CW1fFkRrBryYtSpyefTvYFWGf6sNQNhg";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: "https://pf-street-art-wine-club-front-en-git-bb3b74-matias-rodriguez-ux.vercel.app/userprofile",
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
