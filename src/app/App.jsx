import AddNumber from "../features/AddNumber"
import NumberBank from "../features/NumberBank"
import "./app.css";

const App = () => {
  return (
    <main>
      <h1>Odds & Events w Redux</h1>
      <AddNumber />
      <NumberBank />
    </main>
  );
};

export default App;