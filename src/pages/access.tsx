import { Container, Box, Text, Divider } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import BreadCrumbButton from "../components/breadCrumbButton";
import Iframe from "../components/iframe";
import Title from "../components/title";
import ArticleBox from "../components/articleBox";
import LinkButton from "../components/linkButton";
import MotionLayout from "../components/motionLayout";
import Section from "../components/section";

const Access: React.FC = () => {
  return (
    <MotionLayout>
      <Container mb={6} p={3}>
        <Box mt="70px">
          <Box mb={10}>
            <BreadCrumbButton>Access</BreadCrumbButton>
          </Box>
          <Box mb={10}>
            <Iframe
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.068505054597!2d138.31431651555206!3d36.696891679969966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d895ee28349c3%3A0x6dc4e3b22b2c3850!2sUehala%20Optional%20Hair!5e0!3m2!1sja!2sjp!4v1649639613112!5m2!1sja!2sjp"
            />
          </Box>
          <Section delay={"0.2"}>
            <Box mb={3}>
              <Title>店舗情報</Title>
            </Box>
            <Box mb={10}>
              <ArticleBox>
                <Box>
                  <Text>営業時間／9:00~18:30</Text>
                  <Divider my={2} size="xl" />
                  <Text>定休日／毎週月曜日、第１火曜日、第３日曜日</Text>
                  <Divider my={2} size="xl" />
                  <Text>駐車場／あり(最大３台)</Text>
                  <Divider my={2} size="xl" />
                </Box>
                <Box>
                  <Text>〒381-0201</Text>
                  <Text>長野県上高井郡小布施町773</Text>
                </Box>
              </ArticleBox>
            </Box>
            <Box textAlign="center">
              <LinkButton href="/" leftIcon={<PhoneIcon />}>
                026-247-2540
              </LinkButton>
            </Box>
          </Section>
        </Box>
      </Container>
    </MotionLayout>
  );
};

export default Access;
