import { Container, Box, Text, Divider } from "@chakra-ui/react";
import Head from "next/head";
import MotionLayout from "../components/motionLayout";
import BreadCrumbButton from "../components/breadCrumbButton";
import CardItems from "../components/cardItems";
import Title from "../components/title";
import ArticleBox from "../components/articleBox";

import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcJcb } from "react-icons/fa";
import { BrandPaypay } from "tabler-icons-react";

const Menu: React.FC = () => {
  return (
    <MotionLayout>
      <Head>
        <title>Menu | Optional Hair Uehala</title>
      </Head>
      <Container p={3} maxW="container.md">
        <Box>
          <Box mb={10}>
            <BreadCrumbButton>Menu</BreadCrumbButton>
          </Box>
          <Box mb={10}>
            <CardItems />
          </Box>
          <Box mb={3}>
            <Title>決済方法</Title>
          </Box>
          <Box mb={10}>
            <ArticleBox>
              <Text mb={2}>クレジットカード</Text>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                gap="0.5em"
              >
                <Box display="flex">
                  <Box pr={1}>
                    <FaCcVisa size={25} />
                  </Box>
                  <Text>VISA</Text>
                </Box>
                <Box display="flex">
                  <Box pr={1}>
                    <FaCcMastercard size={25} />
                  </Box>
                  <Text>MasterCard</Text>
                </Box>
                <Box display="flex">
                  <Box pr={1}>
                    <FaCcJcb size={25} />
                  </Box>
                  <Text>JCB</Text>
                </Box>
                <Box display="flex">
                  <Box pr={1}>
                    <SiAmericanexpress size={25} />
                  </Box>
                  <Text>AmericanExpress</Text>
                </Box>
                <Divider my={2} size="xl" />
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text>QRコード決済</Text>
                <Box display="flex">
                  <Box pr={1}>
                    <BrandPaypay size={25} />
                  </Box>
                  <Text>PayPay</Text>
                </Box>
              </Box>
            </ArticleBox>
          </Box>
        </Box>
      </Container>
    </MotionLayout>
  );
};

export default Menu;
