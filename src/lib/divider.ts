import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const xl = defineStyle({
    borderWidth: "0.5px",
    borderRadius: 'lg',
    borderColor: "gray.600",

    _dark: {
        borderColor: "gray.400"
    }
})

export const dividerTheme = defineStyleConfig({
    sizes: { xl },
})