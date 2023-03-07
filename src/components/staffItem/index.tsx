import { LinkBox, LinkOverlay, Center, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from 'next/link';

type StaffItemProps = {
  id: string;
  title: string;
  name: string;
  bg: string;
  altName: string;
  imageSrc: string;
};

const StaffItem: React.FC<StaffItemProps> = ({
  id,
  title,
  name,
  bg,
  altName,
  imageSrc,
}) => {
  return (
    <LinkBox cursor="pointer">
      <Box
        w="100"
        textAlign="center"
        bgGradient={bg}
        borderRadius="md"
        boxShadow="xl"
      >
        <Box py={12}>
          <Center>
            <Image alt={altName} src={imageSrc} loader={({ src }) => src} />
          </Center>
        </Box>
      </Box>
      <LinkOverlay as={NextLink} href={`/staffs/${id}`}>
        <Text textAlign="center" color="gray.500" mt={3} fontSize="sm">
          {title}
        </Text>
        <Text textAlign="center" mt={2} fontWeight="bold" fontSize="lg">
          {name}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export default StaffItem;
