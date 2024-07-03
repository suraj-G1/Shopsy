import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Toaster} from 'react-hot-toast'
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>
    
  </BrowserRouter>
);
