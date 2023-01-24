import { VStack } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <VStack alignItems={{ sm: "center", md: "center", lg: "start" }}>
      <h2 style={{ marginTop: "100px", fontSize: "50px", fontFamily: "Zen Kaku Gothic Antique" }}>
        こんにちは
      </h2>
    </VStack>
  );
};

export default Home;
