import {
  Box,
  useColorModeValue,
  Text,
  Divider
} from "@chakra-ui/react";

const Article: React.FC = () => {
  return (
    // <Box
    //   bg={useColorModeValue("white", "whiteAlpha.200")}
    //   borderRadius="md"
    //   boxShadow="xl"
    //   p={4}
    //   css={{ backdropFilter: "blur(10px)" }}
    // >
    //   <UnorderedList spacing={3} mb={3}>
    //     <ListItem>営業時間／9:00~18:30</ListItem>
    //     <ListItem>定休日／毎週月曜日、第１火曜日、第３日曜日</ListItem>
    //     <ListItem>駐車場／あり(最大３台)</ListItem>
    //   </UnorderedList>
    //   <Box>
    //     <Text>〒381-0201</Text>
    //     <Text>長野県上高井郡小布施町773</Text>
    //   </Box>
    // </Box>

    <Box
      bg={useColorModeValue("white", "whiteAlpha.200")}
      borderRadius="md"
      boxShadow="xl"
      p={4}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Box>
        <Text>営業時間／9:00~18:30</Text>
        <Divider my={2} size="xl"/>
        <Text>定休日／毎週月曜日、第１火曜日、第３日曜日</Text>
        <Divider my={2} size="xl"/>
        <Text>駐車場／あり(最大３台)</Text>
        <Divider my={2} size="xl"/>
      </Box>
      <Box>
        <Text>〒381-0201</Text>
        <Text>長野県上高井郡小布施町773</Text>
      </Box>
    </Box>
  );
};

export default Article;
