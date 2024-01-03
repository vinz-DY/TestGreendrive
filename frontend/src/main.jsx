import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import App from "./App";
import Map from "./components/Map/Map";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   loader: () => {
  //     return connexion
  //       .get(`${import.meta.env.VITE_BACKEND_URL}/api/terminals`)
  //       .then((res) => res.data)
  //       .catch((err) => console.error(err));
  //   },
  // },
  {
    path: "/",
    element: <App />,
    loader: () => {
      return connexion
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/profils`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/map",
    element: <Map />,
    loader: () => {
      return connexion
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/terminals`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
