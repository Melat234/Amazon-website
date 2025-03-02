
// import './index.css'
// import App from './App.jsx'
// import { DataProvider } from './Components/DataProvider/DataProvider.jsx'

// import {  } from "react";
//  const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <DataProvider>
//       <App />
//     </DataProvider>
//   </React.StrictMode>
// )
import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
import reducer, { initialState } from "./Utility/reducer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
