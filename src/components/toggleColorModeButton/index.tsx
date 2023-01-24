import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";

const ToggleColorModeButton: NextPage = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="DarkMode Switch"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue("blue", "orange")}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColorModeButton;