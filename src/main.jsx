import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import {HelmetProvider} from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={Routes}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
