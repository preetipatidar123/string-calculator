import "./App.css";
import { calculator } from "./StringCalculator/stringCalculator";


function App() {
  const input = "1";
  const result = calculator(input);

  return (
    <div>
      <h1>String Calculator</h1>
      <p>Input: {input}</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
