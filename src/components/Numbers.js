import { Box, Button } from "@chakra-ui/react";

const Numbers = (props) => {
  const nums = Array.from(Array(10).keys()).map((number) => {
    return (
      <Button
        onClick={(e) => {
          if (props.counts != "0")
            props.onClick(props.counts + e.target.innerHTML);
          else props.onClick(e.target.innerHTML);
        }}
        key={number}
        w="45px"
        h="45px"
        margin="4px"
      >
        {number}
      </Button>
    );
  });
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      w="80%"
      margin="10px"
      borderRadius="10px"
    >
      {nums}
    </Box>
  );
};

export default Numbers;
