import { Box, Button, Text } from "@chakra-ui/react";

const Numbers = (props) => {
  const nums = Array.from(Array(10).keys()).map((number) => {
    return (
      <Button key={number} w="45px" h="45px" margin="4px">
        {number}
      </Button>
    );
  });
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
        <Box
          display="flex"
          flexWrap="wrap"
          w="80%"
          margin="10px"
          borderRadius="10px"
        >
          {nums}
        </Box>
      </Box>
    </Box>
  );
};

export default Numbers;
