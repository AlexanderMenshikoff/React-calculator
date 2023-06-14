import { Text, Box } from "@chakra-ui/react";

const InputWindow = (props) => {
  return (
    <Box display="flex" w="100%">
      <Text
        display="flex"
        justifyContent="start"
        alignItems="center"
        bg="gray.50"
        w="100%"
        h="38px"
        px="4px"
        borderRadius="8px"
        marginLeft="10px"
      >
        {props.counts}
      </Text>

      <Text w="fit-content" h="38px" textColor="tomato" margin="5px 10px 0 5px">
        {props.result}
      </Text>
    </Box>
  );
};

export default InputWindow;
