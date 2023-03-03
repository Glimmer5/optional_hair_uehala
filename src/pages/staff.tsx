import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import BreadCrumbButton from "../components/breadCrumbButton";
import StaffItem from "../components/staffItem";
import MotionLayout from "../components/motionLayout";

import Kei from "../public/images/staffImage/staff1.svg";
import Saya from "../public/images/staffImage/staff2.svg";
import Yoshiaki from "../public/images/staffImage/staff3.svg";
import Hideko from "../public/images/staffImage/staff4.svg";

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
        <SimpleGrid columns={[1, 1, 2]} spacing={10} mb={10}>
          <StaffItem
            title="OWNER / TOP DIRECTOR"
            name="KEI"
            bg="linear(to-t, blue.200, teal.500)"
            altName="Kei"
            imageSrc={Kei}
          />
          <StaffItem
            title="BEAUTY / STYLIST"
            name="SAYA"
            bg="linear(to-t, red.200, yellow.400)"
            altName="Saya"
            imageSrc={Saya}
          />
          <StaffItem
            title="BARBERE / STYLIST"
            name="YOSHIAKI"
            bg="linear(to-t, green.200, green.500)"
            altName="Yoshiaki"
            imageSrc={Yoshiaki}
          />
          <StaffItem
            title="BEAUTY / ESTHETIC"
            name="HIDEKO"
            bg="linear(to-t, pink.200, purple.400)"
            altName="Hideko"
            imageSrc={Hideko}
          />
        </SimpleGrid>
      </Container>
    </MotionLayout>
  );
};

export default Staff;
