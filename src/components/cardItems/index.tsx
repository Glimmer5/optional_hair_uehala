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
import permImage from "../../public/images/menuImage/menu-3.jpeg";
import headspaImage from "../../public/images/menuImage/menu-4.jpeg";
import shavingImage from "../../public/images/menuImage/menu-5.jpeg";
import otherImage from "../../public/images/menuImage/menu-6.jpeg";


const CardItems = () => {

  type cardListProps = {
    id: number;
    title: string;
    nameA: string;
    nameB: string;
    nameC: string;
    nameD?: string;
    priceA: string;
    priceB: string;
    priceC: string;
    priceD?: string;
    detailA: string;
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
      priceA: "¥7,150",
      priceB: "¥4,950",
      priceC: "¥4,400",
      priceD: "¥3,850",
      detailA: "※シャンプー、ブロー込み。",
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
      detailA: "※上記はショート料金となります。",
      image: colorImage,
    },
    {
      id: 3,
      title: "PERM",
      nameA: "ナノミストパーマ",
      nameB: "ケアアイロンパーマ",
      nameC: "オプショナルクリープ",
      nameD: "縮毛矯正",
      priceA: "¥5,500~",
      priceB: "¥5,500~",
      priceC: "¥9,350~",
      priceD: "¥11,000~",
      detailA: "※上記はショート料金となります。",
      image: permImage,
    },
    {
      id: 4,
      title: "OTHER",
      nameA: "鼻毛バイバイエステ",
      nameB: "イヤースッキリ",
      nameC: "北斗のマッサージ",
      nameD: "シャイニングクロー",
      priceA: "¥770",
      priceB: "¥550",
      priceC: "¥550",
      priceD: "¥550",
      detailA: "※詳しくはスタッフまでお尋ねください。",
      image: otherImage,
    },
    {
      id: 5,
      title: "HEAD SPA",
      nameA: "クレンジングスパ",
      nameB: "育毛ヘッドスパ",
      nameC: "育毛オプショナルスパ",
      nameD: " ",
      priceA: "¥1,650",
      priceB: "¥3,850",
      priceC: "¥4,620",
      priceD: " ",
      detailA: "※詳しくはスタッフまでお尋ねください。",
      image: headspaImage,
    },
    {
      id: 6,
      title: "SHAVING",
      nameA: "フェイスケアシェープ",
      nameB: "タイムスリップエステ",
      nameC: "各種パック",
      priceA: "¥2,530",
      priceB: "¥1,100",
      priceC: "¥1,100",
      priceD: "",
      detailA: "※詳しくはスタッフまでお尋ねください。",
      image: shavingImage,
    },
  ];

  return (
    <SimpleGrid columns={[ 1, 1, 2 ]} spacing={10}>
      {cardList.map((item) => {
        return (
          <Box key={item.id}>
            <Card>
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
              <CardFooter display="block">
                <Text color="gray.500" fontSize="sm">
                  {item.detailA}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  ※料金は全て税込みです。
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
