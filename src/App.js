import { Box, Text, Button } from "@chakra-ui/react";
import Numbers from "./components/Numbers";
import { useState } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay";

const App = () => {
  const [counts, setCounts] = useState(0);
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <CalculatorDisplay
        counts={counts}
        result={result}
        setCounts={setCounts}
      />
    </div>
  );
};

export default App;
