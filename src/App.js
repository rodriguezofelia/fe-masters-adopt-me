import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Fuzz" animal="Dog" breed="Lab" />
      <Pet name="Peper" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
