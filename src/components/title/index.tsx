import { Box } from "@chakra-ui/react";

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Box bg="teal.600" color="white" borderRadius="md" p={3} boxShadow="xl">
      {children}
    </Box>
  );
};

export default Title;
