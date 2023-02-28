import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";

type StaffItemProps = {
  title: string;
  name: string;
  bg: string;
  altName: string;
  imageSrc: string;
}

const StaffItem: React.FC<StaffItemProps> = ({ title, name, bg, altName, imageSrc }) => {
  return (
      <Box mb={10}>
        <Box
          w="100"
          textAlign="center"
          bgGradient={bg}
          borderRadius="md"
          boxShadow="xl"
        >
          <Box py={12}>
            <Center>
              <Image
                alt={altName}
                src={imageSrc}
                loader={({ src }) => src}
              />
            </Center>
          </Box>
        </Box>
        <Text textAlign="center" color="gray.500" mt={3} fontSize="sm">
          {title}
        </Text>
        <Text textAlign="center" mt={2} fontWeight="bold" fontSize="lg">
          {name}
        </Text>
      </Box>
  );
};

export default StaffItem;
