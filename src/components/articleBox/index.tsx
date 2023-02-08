import { Box, useColorModeValue } from "@chakra-ui/react";

type ArticleBoxProps = {
  children: React.ReactNode;
};

const ArticleBox: React.FC<ArticleBoxProps> = ({ children }) => {
  return (
    <Box
      bg={useColorModeValue("white", "whiteAlpha.200")}
      borderRadius="md"
      boxShadow="xl"
      p={4}
      css={{ backdropFilter: "blur(10px)" }}
    >
      {children}
    </Box>
  );
};

export default ArticleBox;
