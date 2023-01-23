import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import React from "react";

const ToggleColorModeButton: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="DarkMode Switch"
      icon={colorMode === "light" ? <MoonIcon color="white"/> : <SunIcon color="black"/>}
      colorScheme={colorMode === "light" ? "blue" : "orange"}
      m="1rem"
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColorModeButton;
