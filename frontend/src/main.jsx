import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import App from "./App";
import Map from "./components/Map/Map";
import AdminUsers from "./pages/AdminUsers";
import AdminCars from "./pages/AdminCars";
import AdminTerminals from "./pages/AdminTerminal";
import AdminUserId from "./pages/AdminUserId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/user",
    element: <AdminUsers />,
    loader: () => {
      return connexion
        .get("/profils")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/admin/user/:id",
    element: <AdminUserId />,
    loader: ({ params }) => {
      return connexion
        .get(`/profils/${params.id}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/admin/car",
    element: <AdminCars />,
    loader: () => {
      return connexion
        .get("/cars")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/admin/terminal",
    element: <AdminTerminals />,
    loader: () => {
      return connexion
        .get("/terminals")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/map",
    element: <Map />,
    loader: () => {
      return connexion
        .get("/terminals")
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
