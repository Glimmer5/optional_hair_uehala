import Header from "../header";
import Footer from "../footer";

import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
