import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import {HelmetProvider} from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </HelmetProvider>

    </AuthProvider>
  </React.StrictMode>,
)
