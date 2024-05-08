import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Provider } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store/store';
import { store } from "./store/store";

import App from "./App";

// import { UserProvider } from "./contexts/user.context";
// import { UserMenuProvider } from "./contexts/user-menu.context";
import { CartProvider } from "./contexts/cart.context";
import { CategoriesProvider } from "./contexts/Categories.context";

import ErrorPage from "./ErrorPage";

import "./Main.scss";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/*  <UserProvider>
<UserMenuProvider> */}
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
      {/*    </UserMenuProvider>
      </UserProvider> */}
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
