import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

const element = <h1>Hello, Platzi Badges</h1>;
ReactDOM.render(
  <Badge
    firstName="Manuel"
    lastName="Rodrigues"
    userAvatarUrl="https://avatars3.githubusercontent.com/u/22405900?s=400&u=575d009b58ef917b1d9f6fb43a635e3edaab82c2&v=4"
    jobTitle="Software Engineer"
    twitterUsername="manuelitod"
  />,
  container
);
