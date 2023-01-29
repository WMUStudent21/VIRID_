import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddPoi from "./components/add_poi"
import { Auth0Provider } from '@auth0/auth0-react';

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const routes = createBrowserRouter([{
  path: "/", 
  element: <App />
},
{
  path: "/add_poi",
  element: <AddPoi />
}

])

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain= {domain}
    clientId = {clientId}
    redirectUri= {window.location.origin}
    >
    < RouterProvider router={routes}/> 
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


