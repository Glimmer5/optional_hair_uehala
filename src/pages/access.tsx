import { Container, Box } from "@chakra-ui/react";
import BreadCrumbButton from "../components/breadCrumbButton";
import Iframe from "../components/iframe";
import Title from "../components/title";

const Access: React.FC = () => {
  return (
    <Container mb={6} p={3}>
      <Box my={80}>
        <Box mb={10}>
          <BreadCrumbButton>Access</BreadCrumbButton>
        </Box>
        <Box mb={10}>
          <Iframe />
        </Box>
        <Title>店舗情報</Title>
      </Box>
    </Container>
  );
};

export default Access;
