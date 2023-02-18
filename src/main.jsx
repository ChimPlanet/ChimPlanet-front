import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import RootBoundary from "@/pages/RootBoundary";
import queryClient, { QueryClientProvider } from "@/query/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RootBoundary>
          <App />
        </RootBoundary>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
