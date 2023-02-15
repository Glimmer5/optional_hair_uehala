import Header from "../header";
import Footer from "../footer";

import { Box, Container } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="main" pb={5}>
      <Header />
      <Container maxW="container.lg" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
