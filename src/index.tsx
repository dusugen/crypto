import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {RequestProvider} from "react-request-hook";
import config from "./config.json"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const axiosInstance = axios.create({
  headers: {
    authorization: `Apikey ${config.apiToken}`
  },
  baseURL: `${config.apiUrl}`
})

root.render(
  <RequestProvider value={axiosInstance}>
    <App/>
  </RequestProvider>
);

reportWebVitals();
