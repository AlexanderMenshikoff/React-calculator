import { Box } from "@chakra-ui/react";
import Numbers from "./Numbers";
import InputWindow from "./InputWindow";
const CalculatorDisplay = (props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box
        display="flex"
        gap="5px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="200px"
        background="gray.400"
        h="300px"
        borderRadius="15px"
      >
        <InputWindow counts={props.counts} result={props.result} />
        <Numbers onClick={props.setCounts} counts={props.counts} />
      </Box>
    </Box>
  );
};

export default CalculatorDisplay;
