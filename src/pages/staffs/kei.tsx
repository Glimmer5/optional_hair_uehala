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

import KEI from "../../public/images/staffImage/staff1.svg";

const Kei: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Kei | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Section>
          <Box mb={10}>
            <BreadCrumbArticleButton>Kei</BreadCrumbArticleButton>
          </Box>
          <Box mb={10}>
            <ArticleBox>
              <Box
                display={{ md: "flex" }}
                justifyContent="space-around"
                mb={5}
              >
                <Box mb={5}>
                  <Heading>Kei</Heading>
                  <Text>Owner/ Top Director</Text>
                </Box>
                <Center>
                  <Box bgGradient="linear(to-t, blue.200, teal.500)" borderRadius="full">
                    <Image alt="Kei" src={KEI} loader={({ src }) => src} />
                  </Box>
                </Center>
              </Box>
              <Text>
                お客様のオーダーと私からのアドバイスをMixさせた最適解のスタイルを、その都度提供できるよう心掛けています。
                <br />
                趣味のバンド活動ではギターと歌を担当していて、最近は長野市の劇団でも役者をちょこちょこ...
                <br />
                カットだけでなく、メンズエステやマッサージ等癒し系や脱毛等珍しいメニューをご用意してお待ちしています。
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

export default Kei;
