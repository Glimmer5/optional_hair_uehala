import { Card, CardBody, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";
import imageSrc from "../../public/images/menuImage/menu-1.jpeg";

const CardItem = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Box borderRadius="lg">
          <Image loader={({ src }) => src} alt="cutMenu" src={imageSrc} />
        </Box>
        <Heading size="md" textAlign="center">
          Cut
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CardItem;
