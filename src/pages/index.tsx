import { Container, Box } from "@chakra-ui/react";
import Iframe from "../components/iframe";
import LinkButton from "../components/linkButton";

const Home: React.FC = () => {
  return (
    <Container mb={6} p={3}>
      <Box my={80}>
        <Iframe />
        <Box textAlign="center" my={6}>
          <LinkButton>詳しく見る</LinkButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
