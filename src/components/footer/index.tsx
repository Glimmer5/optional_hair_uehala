import { Box } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box alignItems="center" opacity={0.5} fontSize="sm" textAlign="center">
      &copy; {new Date().getFullYear()} Optional hair Uehala. All Rights Reserved.
    </Box>
  );
};

export default Footer;
