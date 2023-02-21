import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { dividerTheme } from "./dividerTheme";
import { cardTheme } from "./cardTheme";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#EAE6E2", "gray.900")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  styles,
  config,
  components: { Divider: dividerTheme, Card: cardTheme },
});

export default theme;
