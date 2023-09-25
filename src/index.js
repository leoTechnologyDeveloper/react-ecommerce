import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

//************************************* */

const firebaseConfig = {
  apiKey: "AIzaSyBQfAl6S1oUm77r_IbkAk-0MM0G5h-QVgU",
  authDomain: "react-ecommerce-ff30c.firebaseapp.com",
  projectId: "react-ecommerce-ff30c",
  storageBucket: "react-ecommerce-ff30c.appspot.com",
  messagingSenderId: "1010306876061",
  appId: "1:1010306876061:web:9b7a701bc36e70f54a8a74",
};

initializeApp(firebaseConfig);

//************************************** */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
