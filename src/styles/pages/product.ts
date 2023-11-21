import { styled } from "..";


export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '6.4rem',
    margin: '0 auto',
    maxWidth: 1180,
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 500,
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '.4rem',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }

});

export const DetailsContainer = styled('footer', {
    
    display: 'flex',
    flexDirection: 'column',

  h1: {
    fontSize: '$xl2',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '2rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
      backgroundColor: '$green300',
    },

    '&:disabled':{
      cursor: 'not-allowed',
      opacity: '0.6'
    }
  },
});