import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Wicket" animal="Dog" breed="German Shepard"/>
      <Pet name="Sooty" animal="Cat" breed="Mixed"/>
      <Pet name="Bert" animal="Bird" breed="Parrot"/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
