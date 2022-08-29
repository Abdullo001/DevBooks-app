import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import "./assets/styles/index.scss"
import { AuthProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);


