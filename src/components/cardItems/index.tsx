import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  Text,
  Divider,
  SimpleGrid
} from "@chakra-ui/react";
import Image from "next/image";
import cutImage from "../../public/images/menuImage/menu-1.jpeg";
import colorImage from "../../public/images/menuImage/menu-2.jpeg";

const CardItems = () => {
  type cardListProps = {
    id: number;
    title: string;
    nameA: string;
    nameB: string;
    nameC: string;
    nameD: string;
    priceA: string;
    priceB: string;
    priceC: string;
    priceD: string;
    detail: string;
    image: any;
  };

  const cardList: cardListProps[] = [
    {
      id: 1,
      title: "CUT",
      nameA: "ハイスタンダードコース",
      nameB: "クラシックカットコース",
      nameC: "高校生カットコース",
      nameD: "高校生エステ無しコース",
      priceA: "¥6,500",
      priceB: "¥4,500",
      priceC: "¥4,000",
      priceD: "¥3,500",
      detail: "※シャンプー、ブロー込み",
      image: cutImage,
    },
    {
      id: 2,
      title: "COLOR",
      nameA: "ベリーショート",
      nameB: "ショート",
      nameC: "ミディアム",
      nameD: "ロング",
      priceA: "¥3,800~",
      priceB: "¥4,500~",
      priceC: "¥5,500~",
      priceD: "¥6,500~",
      detail: "※上記はショート料金となります",
      image: colorImage,
    },
  ];

  return (
    <SimpleGrid columns={[ 1, 1, 2 ]} spacing={10}>
      {cardList.map((item) => {
        return (
          <Box key={item.id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  loader={({ src }) => src}
                  alt="cutMenu"
                  src={item.image}
                  className="card-item-thumbnail"
                />
                <Stack mt={6} spacing={3}>
                  <Heading size="md">{item.title}</Heading>
                  <Box display="flex" justifyContent="space-between">
                    <Text>{item.nameA}</Text>
                    <Text>{item.priceA}</Text>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Text>{item.nameB}</Text>
                    <Text>{item.priceB}</Text>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Text>{item.nameC}</Text>
                    <Text>{item.priceC}</Text>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Text>{item.nameD}</Text>
                    <Text>{item.priceD}</Text>
                  </Box>
                </Stack>
                <Divider mt={5} size="xl" />
              </CardBody>
              <CardFooter>
                <Text color="gray.500" fontSize="sm">
                  {item.detail}
                </Text>
              </CardFooter>
            </Card>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default CardItems;
