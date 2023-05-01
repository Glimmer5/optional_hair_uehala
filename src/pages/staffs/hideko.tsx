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

import HIDEKO from "../../public/images/staffImage/staff4.svg";

const Hideko: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Hideko | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Section>
          <Box mb={10}>
            <BreadCrumbArticleButton>Hideko</BreadCrumbArticleButton>
          </Box>
          <Box mb={10}>
            <ArticleBox>
              <Box
                display={{ md: "flex" }}
                justifyContent="space-around"
                mb={5}
              >
                <Box mb={5}>
                  <Heading>Hideko</Heading>
                  <Text>Beauty / Esthetic</Text>
                </Box>
                <Center>
                  <Box
                    bgGradient="linear(to-t, pink.200, purple.400)"
                    borderRadius="full"
                    w="110px"
                    h="110px"
                    objectFit="contain"
                  >
                    <Image alt="Hideko" src={HIDEKO} loader={({ src }) => src} />
                  </Box>
                </Center>
              </Box>
              <Text>レディースシェービング・ブライダルエステ・その他エステなど個室で特別な時間を提供させて頂きます。</Text>
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
                <Text>火曜日（第1火曜日は休み）</Text>
                <Text>10:00~16:00</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>水曜日</Text>
                <Text>10:00~16:00</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>木曜日</Text>
                <Text>10:00~16:00</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>金曜日</Text>
                <Text>10:00~16:00</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>土曜日</Text>
                <Text>10:00~16:00</Text>
              </Box>
              <Divider my={2} size="xl" />
              <Box display="flex" justifyContent="space-between">
                <Text>日曜日（第3日曜日は休み）</Text>
                <Text>10:00~16:00</Text>
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

export default Hideko;
