import { createStitches } from "@stitches/react";

export const 
{
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    createTheme,
    theme,
    css,
} = createStitches({

    theme:{
        colors: {
            white: '#fff',
            gray900: '#121214',
            gray800: '#202024',
            gray400: '#8D8D99',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green500: '#00875f',
            green300: '#00b37e',

            linearGradient: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
        },

        fontSizes: {
            sml: '1.6rem',
            md: '1.8rem',
            lg: '2rem',
            xl: '2.4rem',
            xl2: '3.2rem',
        }
    }
})
