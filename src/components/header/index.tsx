import {
  Box,
  Container,
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import ToggleColorModeButton from "../toggleColorModeButton";
import HamburgerMenuButton from "../hamburgerMenuButton";
import Logo from "../logo";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <Box
      position="fixed"
      as="header"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        justifyContent="space-between"
      >
        <Flex align="center" mr={6}>
          <Heading
            as="h1"
            size={{ base: "lg", md: "md", lg: "lg" }}
            bgGradient="linear(to-r, teal.500, yellow.500)"
            bgClip="text"
            fontWeight="extrabold"
          >
            <Logo />
          </Heading>
        </Flex>

        <Breadcrumb
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={2}
          mt={{ base: 4, md: 0 }}
          color="gray.500"
          fontWeight="bold"
          separator=""
          spacing="10px"
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
            <BreadcrumbLink href="/access">Access</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              display="flex"
              alignItems="center"
              href="https://ja-jp.facebook.com/people/Optional-Hair-Uehala/100057615032399/"
            >
              <IoLogoFacebook />
              <Text ml={1}>Facebook</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              display="flex"
              alignItems="center"
              href="https://www.instagram.com/optional_hair_uehala/"
            >
              <IoLogoInstagram />
              <Text ml={1}>Instagram</Text>
            </BreadcrumbLink>
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
