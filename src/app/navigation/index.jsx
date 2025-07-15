import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./config";
import AnimatedRoutes from "@app/providers/AnimatedRouter";

const AppRoutes = () => {
  return (
    <AnimatedRoutes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </AnimatedRoutes>
  )
}

export default AppRoutes;