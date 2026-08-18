import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import Home from './pages/Home';
import Men from './pages/Men';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'profile', element: <Profile /> },
      { path: 'men', element: <Men /> },
      { path: 'wishlist', element: <Wishlist /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

