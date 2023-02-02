import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "white",
    borderWidth: "0.5px",
    borderColor: "gray.300",
    boxShadow: "xl",
    borderRadius: "md",

    _dark: {
      backgroundColor: "gray.700",
      borderColor: "gray.300"
    }
  },
  body: {
    p: "15px",
  }
})

export const cardTheme = defineMultiStyleConfig({ baseStyle })