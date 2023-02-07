import { Container, Box } from "@chakra-ui/react";
import BreadCrumbButton from "../components/breadCrumbButton";
import Iframe from "../components/iframe";
import Title from "../components/title";
import Article from "../components/article";
import LinkButton from "../components/linkButton";

const Access: React.FC = () => {
  return (
    <Container mb={6} p={3}>
      <Box mt="70px">
        <Box mb={10}>
          <BreadCrumbButton>Access</BreadCrumbButton>
        </Box>
        <Box mb={10}>
          <Iframe />
        </Box>
        <Box mb={3}>
          <Title>店舗情報</Title>
        </Box>
        <Box mb={10}>
          <Article />
        </Box>
        <Box textAlign="center">
          <LinkButton>026-247-2540</LinkButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Access;
