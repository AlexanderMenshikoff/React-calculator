import { Box, Button } from "@chakra-ui/react";

const Numbers = (props) => {
  const nums = Array.from(Array(10).keys()).map((number) => {
    return (
      <Button key={number} w="40px" h="40px" margin="4px">
        {number}
      </Button>
    );
  });
  return (
    <Box display="flex" flexWrap="wrap" w="9%">
      {nums}
    </Box>
  );
};

export default Numbers;
