import { globalCss } from "./index";

export const GlobalStyles = globalCss({

    '*':{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    ':root':{
        fontSize: '62.5%'
    },

    'body':{
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontWeight: 400,
    }, 
})