import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import RootBoundary from "@/pages/RootBoundary";
import queryClient, { QueryClientProvider } from "@/query";
import { BrowserRouter as RootRouter } from "react-router-dom";
import { BASE_NAME } from "./constants";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootRouter basename={BASE_NAME}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RootBoundary>
            <App />
          </RootBoundary>
        </RecoilRoot>
      </QueryClientProvider>
    </RootRouter>
  </React.StrictMode>
);
