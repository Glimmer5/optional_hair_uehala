import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import ToggleColorModeButton from '../toggleColorModeButton';

const Header: React.FC = () => {
  return (
    <Box
      position="fixed"
      as="header"
      w="100%"
      height="100px"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      z-index={2}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}><h1>Optional Hair Uehala</h1></Flex>
        <Box>
            <ToggleColorModeButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
