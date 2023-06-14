import { Text, Box } from "@chakra-ui/react";

const InputWindow = (props) => {
  return (
    <Box display="flex" w="100%" justifyContent="between">
      <Text
        display="flex"
        justifyContent="start"
        alignItems="center"
        bg="gray.50"
        w="100%"
        h="38px"
        px="4px"
        borderRadius="8px"
        margin="5px"
      >
        {props.counts}
      </Text>
      <Text w="fit-content" h="38px" textColor="tomato">
        {props.result}
      </Text>
    </Box>
  );
};

export default InputWindow;
