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

type CardImageProps = {
  imageSrc: any;
  altName: string;
  nameTitle: string;
  nameA: string;
  nameB: string;
  nameC: string;
  nameD?: string;
  valueA: string;
  valueB: string;
  valueC: string;
  valueD?: string;
  detailA: string;
};

const CardItem: React.FC<CardImageProps> = ({
  imageSrc,
  altName,
  nameTitle,
  nameA,
  nameB,
  nameC,
  nameD,
  valueA,
  valueB,
  valueC,
  valueD,
  detailA,
}) => {
  return (
    <Card>
      <CardBody>
        <Image
          loader={({ src }) => src}
          alt={altName}
          src={imageSrc}
          className="card-item-thumbnail"
        />
        <Stack mt={6} spacing={3}>
          <Heading size="md">{nameTitle}</Heading>
          <Box display="flex" justifyContent="space-between">
            <Text>{nameA}</Text>
            <Text>{valueA}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>{nameB}</Text>
            <Text>{valueB}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>{nameC}</Text>
            <Text>{valueC}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>{nameD}</Text>
            <Text>{valueD}</Text>
          </Box>
        </Stack>
        <Divider mt={5} size="xl" />
      </CardBody>
      <CardFooter display="block">
        <Text color="gray.500" fontSize="sm">
          {detailA}
        </Text>
        <Text color="gray.500" fontSize="sm">
          ※料金は全て税抜きです。
        </Text>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
