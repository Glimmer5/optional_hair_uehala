import {
  Container,
  Box,
  Heading,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import MotionLayout from "../../components/motionLayout";
import BreadCrumbArticleButton from "../../components/breadCrumbArticleButton";
import ArticleBox from "../../components/articleBox";
import Title from "../../components/title";
import Section from "../../components/section";

import YOSHIAKI from "../../public/images/staffImage/staff3.svg";

const Yoshiaki: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Yoshiaki | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Section>
          <Box mb={10}>
            <BreadCrumbArticleButton>Yoshiaki</BreadCrumbArticleButton>
          </Box>
          <Box mb={10}>
            <ArticleBox>
              <Box
                display={{ md: "flex" }}
                justifyContent="space-around"
                mb={5}
              >
                <Box mb={5}>
                  <Heading>Yoshiaki</Heading>
                  <Text>Barber / Stylist</Text>
                </Box>
                <Center>
                  <Box
                    bgGradient="linear(to-t, green.200, green.500)"
                    borderRadius="full"
                    w="110px"
                    h="110px"
                    objectFit="contain"
                  >
                    <Image alt="Yoshiaki" src={YOSHIAKI} loader={({ src }) => src} />
                  </Box>
                </Center>
              </Box>
              <Text>アイロンパーマなどクラシカルなスタイルが得意です。</Text>
            </ArticleBox>
          </Box>
        </Section>
        <Section delay="0.1">
          <Box mb={3}>
            <Title>定休日</Title>
          </Box>
          <Box mb={10}>
            <ArticleBox>
              <Box display="flex" justifyContent="space-between">
                <Text>月曜日</Text>
                <Text>休み</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>火曜日</Text>
                <Text>休み</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>水曜日</Text>
                <Text>9:00~18:30</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>木曜日</Text>
                <Text>9:00~22:00</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>金曜日</Text>
                <Text>9:00~18:30</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>土曜日</Text>
                <Text>9:00~18:30</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>日曜日</Text>
                <Text>9:00~18:30</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Text color="gray.500" fontSize="sm">
                ※詳しくはスタッフまでお尋ねください。
              </Text>
            </ArticleBox>
          </Box>
        </Section>
      </Container>
    </MotionLayout>
  );
};

export default Yoshiaki;
