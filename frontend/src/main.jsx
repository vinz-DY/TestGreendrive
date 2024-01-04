import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import App from "./App";
import Map from "./components/Map/Map";
import AdminUsers from "./pages/AdminUsers";
import AdminCars from "./pages/AdminCars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return connexion
        .get("terminals")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/AdminUser",
    element: <AdminUsers />,
    loader: () => {
      return connexion
        .get("profils")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/AdminCar",
    element: <AdminCars />,
    loader: () => {
      return connexion
        .get("cars")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/map",
    element: <Map />,
    loader: () => {
      return connexion
        .get("terminals")
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
