import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";

const ToggleColorModeButton: NextPage = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
      style={{ display: "inline-block "}}
      key={useColorModeValue("light", "dark")}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="DarkMode Switch"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          colorScheme={useColorModeValue("blue", "orange")}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleColorModeButton;
