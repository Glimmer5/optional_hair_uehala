import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import ToggleColorModeButton from "../toggleColorModeButton";
import HamburgerMenuButton from "../hamburgerMenuButton";

const Header: React.FC = () => {
  return (
    <Box
      position="fixed"
      as="header"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      z-index={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Flex align="center" justify="space-between" mr={5}>
          <Heading
            as="h1"
            size="lg"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Optional Hair Uehala
          </Heading>
        </Flex>
        <Box flex={1} display="flex" justifyContent="right">
          <ToggleColorModeButton />
          <Box pl={1}>
            <HamburgerMenuButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
