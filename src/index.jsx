import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

const element = <h1>Hello, Platzi Badges</h1>;
ReactDOM.render(<App />, container);
