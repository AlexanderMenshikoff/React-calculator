import { Box, Text, Button } from "@chakra-ui/react";
import Numbers from "./components/Numbers";

const App = () => {
  return (
    <div className="App">
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <Numbers />
      </Box>
    </div>
  );
};

export default App;
