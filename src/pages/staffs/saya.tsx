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

import SAYA from "../../public/images/staffImage/staff2.svg";

const Saya: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Saya | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Section>
          <Box mb={10}>
            <BreadCrumbArticleButton>Saya</BreadCrumbArticleButton>
          </Box>
          <Box mb={10}>
            <ArticleBox>
              <Box
                display={{ md: "flex" }}
                justifyContent="space-around"
                mb={5}
              >
                <Box mb={5}>
                  <Heading>Saya</Heading>
                  <Text>Beauty / Stylist</Text>
                </Box>
                <Center>
                  <Box
                    bgGradient="linear(to-t, red.200, yellow.400)"
                    borderRadius="full"
                    w="110px"
                    h="110px"
                    objectFit="contain"
                  >
                    <Image alt="Saya" src={SAYA} loader={({ src }) => src} />
                  </Box>
                </Center>
              </Box>
              <Text>
                お客様の生活に寄り添ったスタイルをご提案させていただきます。
                <br />
                皆様と楽しいお話ができることを楽しみに心よりお待ちしています!
              </Text>
            </ArticleBox>
          </Box>
        </Section>
        <Section delay="0.1">
          <Box mb={3}>
            <Title>出勤予定</Title>
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

export default Saya;
