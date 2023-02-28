import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";
import BreadCrumbButton from "../components/breadCrumbButton";
import StaffItem from "../components/staffItem";
import MotionLayout from "../components/motionLayout";

import Kei from "../public/images/staffImage/staff1.svg";

const Staff: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Staff | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Box mb={10}>
          <BreadCrumbButton>Staff</BreadCrumbButton>
        </Box>
        <Box mb={10}>
          <StaffItem
            title="OWNER / TOP DIRECTOR"
            name="KEI"
            bg="linear(to-t, blue.200, teal.500)"
            altName="Kei"
            imageSrc={Kei}
          />
        </Box>
      </Container>
    </MotionLayout>
  );
};

export default Staff;
