import { globalCss } from ".";

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
      fontFamily: 'Roboto',
      '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
      fontWeight: 400,
  }, 

  'button':{
    cursor: 'pointer',
    border: 'none',

    '&:disabled':{
      cursor: 'not-allowed',
      opacity: 0.5,
  }
  },

  '::-webkit-scrollbar': {
    width: '1.2rem',
    borderRadius: '.3rem',
    backgroundColor: 'transparent'
},

'::-webkit-scrollbar-thumb': {
    backgroundColor: '$green300', 
    borderRadius: 6, 
}
});