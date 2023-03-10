import { Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import MotionLayout from "../components/motionLayout";
import Head from "next/head";
import BreadCrumbButton from "../components/breadCrumbButton";
import Image from "next/image";
import Section from "../components/section";

import AboutImage1 from "../public/images/aboutImage/aboutimg1.jpeg";
import AboutImage2 from "../public/images/aboutImage/aboutimg2.jpeg";
import AboutImage3 from "../public/images/aboutImage/aboutimg3.jpeg";
import AboutImage4 from "../public/images/aboutImage/aboutimg4.jpeg";

const About: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>About | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Section>
          <Box mb={10}>
            <BreadCrumbButton>About</BreadCrumbButton>
          </Box>
          <Box mb={10}>
            <Heading textAlign="center">くつろぎと<br />新しい刺激を。</Heading>
            <Text mt={5}>
              昔ながらの理容室の良さ（技術やくつろぎ、癒し）に最新のメンズエステシェービング、ヘッドスパやクリープパーマ、美容ブースではまつげパーマや個室にて女性理容師によるレディースシェービング等新しい刺激も取り入れたお店です。
            </Text>
          </Box>
        </Section>
        <Box mb={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing={5}>
            <Section delay="0.1">
              <Image
                loader={({ src }) => src}
                alt="aboutImage"
                src={AboutImage1}
                className="card-item-thumbnail"
              />
            </Section>
            <Section delay="0.2">
              <Image
                loader={({ src }) => src}
                alt="aboutImage"
                src={AboutImage2}
                className="card-item-thumbnail"
              />
            </Section>
            <Section delay="0.3">
              <Image
                loader={({ src }) => src}
                alt="aboutImage"
                src={AboutImage3}
                className="card-item-thumbnail"
              />
            </Section>
            <Section delay="0.4">
              <Image
                loader={({ src }) => src}
                alt="aboutImage"
                src={AboutImage4}
                className="card-item-thumbnail"
              />
            </Section>
          </SimpleGrid>
        </Box>
      </Container>
    </MotionLayout>
  );
};

export default About;
