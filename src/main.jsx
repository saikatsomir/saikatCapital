import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from './app/layouts/MainLayout';
import { router } from './app/router/routes';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
