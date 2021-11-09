import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havense",
    }),
    React.createElement(Pet, { name: "Fuzz", animal: "Dog", breed: "Lab Mix" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
