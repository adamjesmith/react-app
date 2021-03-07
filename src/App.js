const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
