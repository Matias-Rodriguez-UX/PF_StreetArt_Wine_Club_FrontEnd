import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";

// axios.defaults.baseURL= 'http://localhost:3001';
axios.defaults.baseURL = 'pfstreetartwineclubbackend-production.up.railway.app';

const domain = "dev-142tko5ud5c6ozuq.us.auth0.com";
const clientId = "1gLC55ZNHYDtZnf38LU2Zlc1UMUqoEXT";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: 'http://localhost:3000/userprofile'
        }}>
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
