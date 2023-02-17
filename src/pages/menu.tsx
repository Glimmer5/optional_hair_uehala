import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";
import MotionLayout from "../components/motionLayout";
import BreadCrumbButton from "../components/breadCrumbButton";
import CardItems from '../components/cardItems';

const Menu: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Menu | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Box>
          <Box mb={10}>
            <BreadCrumbButton>Menu</BreadCrumbButton>
          </Box>
          <Box mb={10}>
            <CardItems />
          </Box>
        </Box>
      </Container>
    </MotionLayout>
  );
};

export default Menu;
