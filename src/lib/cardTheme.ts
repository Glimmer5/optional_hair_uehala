import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "white",
    boxShadow: "xl",
    borderRadius: "md",
    backdropFilter: "blur(10px)",

    _dark: {
      backgroundColor: "whiteAlpha.200",
    }
  },
  body: {
    p: "15px",
  },
  footer: {
    paddingTop: "0px"
  }
})

export const cardTheme = defineMultiStyleConfig({ baseStyle })