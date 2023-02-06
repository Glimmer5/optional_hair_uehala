import { Container, Box } from "@chakra-ui/react";
import BreadCrumbButton from '../components/breadCrumbButton';

const Access: React.FC = () => {
  return (
    <Container mb={6} p={3}>
      <Box my={80}>
        <BreadCrumbButton />
      </Box>
    </Container>
  );
};

export default Access;
