import { Container, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Head from 'next/head';
import Iframe from "../components/iframe";
import LinkButton from "../components/linkButton";
import MotionLayout from "../components/motionLayout";
import Section from "../components/section";
import MenuSlider from '../components/menuSlider';


const Home: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Home | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Box>
          <Section>
            <MenuSlider />
          </Section>
          <Section delay={"0.2"}>
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
