import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import imageSrc from "../../public/images/menuImage/menu-1.jpeg";

const CardItem = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          loader={({ src }) => src}
          alt="cutMenu"
          src={imageSrc}
          className="card-item-thumbnail"
        />
        <Stack mt={6} spacing={3}>
          <Heading size="md">Cut</Heading>
          <Box display="flex" justifyContent="space-between">
            <Text>ハイスタンダードコース</Text>
            <Text>6,500円</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>クラシックカットコース</Text>
            <Text>4,500円</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>高校生カットコース</Text>
            <Text>4,000円</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>高校生エステ無しコース</Text>
            <Text>3,500円</Text>
          </Box>
        </Stack>
        <Divider mt={5} size="xl" />
      </CardBody>
      <CardFooter>
        <Text color="gray.500" fontSize="sm">※シャンプー、ブロー込み</Text>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
