import { Container, Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Iframe from "../components/iframe";
import LinkButton from "../components/linkButton";
import MotionLayout from "../components/motionLayout";
import Section from "../components/section";
import MenuSlider from "../components/menuSlider";
import StaffItem from "../components/staffItem";

import Kei from "../public/images/staffImage/staff1.svg";
import Saya from "../public/images/staffImage/staff2.svg";
import Yoshiaki from "../public/images/staffImage/staff3.svg";
import Hideko from "../public/images/staffImage/staff4.svg";

const Home: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Home | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Box>
          <Section>
            <Box mb={10}>
              <Heading textAlign="center">くつろぎと<br />新しい刺激を。</Heading>
              <Text mt={5}>
                昔ながらの理容室の良さ（技術やくつろぎ、癒し）に最新のメンズエステシェービング、ヘッドスパやクリープパーマ、美容ブースではまつげパーマや個室にて女性理容師によるレディースシェービング等新しい刺激も取り入れたお店です。
              </Text>
            </Box>
          </Section>
          <Section delay="0.1" mb={10}>
            <MenuSlider />
          </Section>
          <SimpleGrid columns={[1, 1, 2]} spacing={5} mb={10}>
            <StaffItem
              id="kei"
              title="Owner / Top Director"
              name="Kei"
              bg="linear(to-t, blue.200, teal.500)"
              altName="Kei"
              imageSrc={Kei}
            />
            <Section delay="0.2">
              <StaffItem
                id="saya"
                title="Beauty / Stylist"
                name="Saya"
                bg="linear(to-t, red.200, yellow.400)"
                altName="Saya"
                imageSrc={Saya}
              />
            </Section>
            <Section delay="0.3">
              <StaffItem
                id="yoshiaki"
                title="Barber / Stylist"
                name="Yoshiaki"
                bg="linear(to-t, green.200, green.500)"
                altName="Yoshiaki"
                imageSrc={Yoshiaki}
              />
            </Section>
            <Section delay="0.4">
              <StaffItem
                id="hideko"
                title="Beauty / Esthetic"
                name="Hideko"
                bg="linear(to-t, pink.200, purple.400)"
                altName="Hideko"
                imageSrc={Hideko}
              />
            </Section>
          </SimpleGrid>
          <Section delay="0.5">
            <Iframe
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.068505054597!2d138.31431651555206!3d36.696891679969966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d895ee28349c3%3A0x6dc4e3b22b2c3850!2sUehala%20Optional%20Hair!5e0!3m2!1sja!2sjp!4v1649639613112!5m2!1sja!2sjp"
            />
            <Box textAlign="center" my={6}>
              <LinkButton href="/access" rightIcon={<ChevronRightIcon />}>
                詳しく見る
              </LinkButton>
            </Box>
          </Section>
        </Box>
      </Container>
    </MotionLayout>
  );
};

export default Home;
