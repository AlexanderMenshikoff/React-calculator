import { Box, Button } from "@chakra-ui/react";
import CountButton from "./CountButton";

const SidePanel = (props) => {
  const applyExpression = (countedNumber) => {
    props.setCounts(countedNumber);
    props.setResult(eval(props.counts));
  };

  const checkExpressionTypeResult = () => {
    const expressions = /\+|\-|\/|\*| /;
    const lastNumber = props.counts[props.counts.length - 1];
    if (expressions.test(lastNumber)) return;
    props.setResult(eval(props.counts));
  };

  const clearCalculator = () => {
    props.setCounts(0);
    props.setResult("");
  };
  return (
    <Box
      width="50px"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap="10px"
    >
      <CountButton
        onClick={applyExpression}
        counts={props.counts}
        expression={"+"}
        setCounts={props.setCounts}
        setResult={props.setResult}
      />
      <CountButton
        onClick={applyExpression}
        counts={props.counts}
        expression={"-"}
        setCounts={props.setCounts}
        setResult={props.setResult}
      />
      <CountButton
        onClick={applyExpression}
        counts={props.counts}
        expression={"*"}
        setCounts={props.setCounts}
        setResult={props.setResult}
      />
      <CountButton
        onClick={applyExpression}
        counts={props.counts}
        expression={"/"}
        setCounts={props.setCounts}
        setResult={props.setResult}
      />

      <Button bg="tomato" height="40px" width="40px" onClick={clearCalculator}>
        C
      </Button>

      <Button
        bg="tomato"
        height="40px"
        width="40px"
        onClick={checkExpressionTypeResult}
      >
        =
      </Button>
    </Box>
  );
};

export default SidePanel;
