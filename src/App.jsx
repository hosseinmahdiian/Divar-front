import Router from "./router/router";
import defaultOptions from "./configs/reactQuery";

import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({ defaultOptions });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router />
          <Toaster/>
        </Layout>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
