import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Wicket",
      animal: "Dog",
      breed: "German Shepard"
    }),
    React.createElement(Pet, {
      name: "Sooty",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Bert",
      animal: "Bird",
      breed: "Parrot"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
