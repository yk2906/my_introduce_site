import { Button } from "@chakra-ui/react";

export const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <Button bg="red" color="white">
      {children}
    </Button>
  );
};
