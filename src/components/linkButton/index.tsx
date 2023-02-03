import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type LinkButtonProps = {
  children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children }) => {
  return (
    <Button
      as={NextLink}
      href="/access"
      colorScheme="blue"
      boxShadow="xl"
      rightIcon={<ChevronRightIcon />}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
