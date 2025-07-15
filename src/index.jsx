import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "@app/navigation";
import { ReduxProvider } from "@app/providers/ReduxProvider";
import { BrowserRouter } from "react-router-dom";
import Header from "@widgets/header/ui";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <ReduxProvider>
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  </ReduxProvider>,
);
