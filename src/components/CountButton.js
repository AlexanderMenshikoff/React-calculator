import { Button } from "@chakra-ui/react";

const CountButton = (props) => {
  const expressions = /\+|\-|\/|\*| /;
  const lastNumber = props.counts[props.counts.length - 1];
  const checkExpressionType = () => {
    if (expressions.test(lastNumber)) return;
    props.onClick(props.counts + props.expression);
  };
  return (
    <Button
      height="40px"
      width="40px"
      bg="blue.400"
      onClick={() => {
        checkExpressionType();
      }}
    >
      {props.expression}
    </Button>
  );
};

export default CountButton;
