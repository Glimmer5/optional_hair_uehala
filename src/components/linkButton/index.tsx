import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  rightIcon?: any;
  leftIcon?: any;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, href, rightIcon, leftIcon }) => {
  return (
    <Button
      as={NextLink}
      href={href}
      scroll={false}
      colorScheme="blue"
      boxShadow="xl"
      rightIcon={rightIcon}
      leftIcon={leftIcon}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
