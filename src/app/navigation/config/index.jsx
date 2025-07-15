import React from "react";
import NotFound from "../../../pages/NotFound/ui";
import RepositoriesPage from "@pages/Repositories/ui";
import { HomePage } from "@pages/Home/ui";
import RepositoryDetailsPage from "@pages/RepositoryDetailsPage/ui";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
  },
  {
    path: "/repositories",
    name: "Repositories",
    element: <RepositoriesPage />,
  },
  {
    path: '/repositories/:owner/:repo',
    element: <RepositoryDetailsPage />,
  },
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];
