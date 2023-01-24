import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode("gray.100", "gray.800")(props) 
        }
    })
}

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true
}

const theme = extendTheme({ styles, config });

export default theme;