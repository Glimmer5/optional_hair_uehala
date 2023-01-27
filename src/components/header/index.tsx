import {
  Box,
  Container,
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";
import ToggleColorModeButton from "../toggleColorModeButton";
import HamburgerMenuButton from "../hamburgerMenuButton";
import Logo from '../logo';

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
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            size="lg"
            bgGradient="linear(to-r, teal.500, yellow.500)"
            bgClip="text"
            fontWeight="extrabold"
          >
            <Logo />
            Optional Hair Uehala
          </Heading>
        </Flex>

        <Breadcrumb
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          color="gray.500"
          fontWeight="bold"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Menu</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Staff</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Access</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Facebook</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Instagram</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box display="flex" justifyContent="right">
          <ToggleColorModeButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <HamburgerMenuButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
