import { styled } from "..";

export const SucessContainer = styled('main', {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 656,   

    h1:{
        fontSize: '$xl2',
        color: '$gray100',
    },

    p:{
        fontSize: '$lg',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
        color: '$green300',
        }
    }
});

export const SucessImage = styled('div', {
    
    width: 150,
    height: 150,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    zIndex: '1',
    img: {
      objectFit: 'cover',
    }
});

export const SucessImageContent = styled('section', {
    display: 'flex',
    alignItems: "center",
    margin: '2rem 0',

    'div + div':{
        marginLeft: '-7.5rem'
    }
});