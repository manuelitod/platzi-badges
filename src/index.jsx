import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

const element = <h1>Hello, Platzi Badges</h1>;
ReactDOM.render(<BadgeNew />, container);
