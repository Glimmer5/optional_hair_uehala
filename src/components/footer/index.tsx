import { Box, Divider, Text, Container, Link } from "@chakra-ui/react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <>
      <Divider mb={8} size="xl" />
      <Box alignItems="center" opacity={0.5} fontSize="sm" textAlign="center">
        <Text mb={5}>
          &copy; {new Date().getFullYear()} Optional hair Uehala. All Rights
          Reserved.
        </Text>
        <Container display="flex" justifyContent="center">
          <Link
            href="https://ja-jp.facebook.com/people/Optional-Hair-Uehala/100057615032399/"
            mr={8}
          >
            <IoLogoFacebook size={20} />
          </Link>
          <Link href="https://www.instagram.com/optional_hair_uehala/">
            <IoLogoInstagram size={20} />
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
