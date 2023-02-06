import Header from "../header";
import Footer from "../footer";

import { Box, Container } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="main" pb={10}>
      <Header />
      <Container maxW="container.lg">{children}</Container>
      <Footer />
    </Box>
  );
};

export default Layout;
