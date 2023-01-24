import { VStack } from "@chakra-ui/react";
import ToggleColorModeButton from "../components/toggleColorModeButton";

const Home: React.FC = () => {
  return (
    <VStack alignItems={{ sm: "center", md: "center", lg: "start" }}>
      <h2 style={{ fontSize: "50px", fontFamily: "Zen Kaku Gothic Antique" }}>
        こんにちは
      </h2>
      <ToggleColorModeButton />
    </VStack>
  );
};

export default Home;
