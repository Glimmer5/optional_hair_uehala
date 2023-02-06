import {
  Box,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const Article: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="md"
      borderColor={useColorModeValue("none", "gray.300")}
      borderWidth="0.3px"
      boxShadow="xl"
      p={3}
    >
      <UnorderedList spacing={3} mb={3}>
        <ListItem>営業時間／9:00~18:30</ListItem>
        <ListItem>定休日／毎週月曜日、第１火曜日、第３日曜日</ListItem>
        <ListItem>駐車場／あり(最大３台)</ListItem>
      </UnorderedList>
      <Box>
        <Text>〒381-0201</Text>
        <Text>長野県上高井郡小布施町773</Text>
      </Box>
    </Box>
  );
};

export default Article;
