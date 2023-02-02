import { Container, Box  } from "@chakra-ui/react";
import Iframe from '../components/iframe';

const Home: React.FC = () => {
  return (
    <Container mb={6} p={3}>
      <Box my={80}>
        <Iframe />
      </Box>
    </Container>
  );
};

export default Home;
