import { Box, Text, Button } from "@chakra-ui/react";
import Numbers from "./components/Numbers";
import { useState } from "react";

const App = () => {
  const [counts, setCounts] = useState(0);
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <Numbers counts={counts} result={result} />
    </div>
  );
};

export default App;
