import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { dividerTheme } from './divider';


const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode("gray.200", "gray.700")(props) 
        }
    })
}

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true
}



const theme = extendTheme({ styles, config, components: {Divider: dividerTheme} });

export default theme;