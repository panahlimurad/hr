import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </Provider>
  </QueryClientProvider>
);
