import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./features/mainPage/mainPage";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<MainPage />, rootElement);
module.hot.accept();
