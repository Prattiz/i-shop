import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
});

export const HomeProduct = styled('div', {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    minWidth: 420,
    borderRadius: 8,
    padding: '.4rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',


    img:{
        objectFit: 'cover',
    },

    footer:{
        position: 'absolute',
        bottom:'0.4rem',
        left:'0.4rem',
        right: '0.4rem',
        padding: '3.2rem',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div:{
            display: 'flex',
            flexDirection: 'column',
        },

        strong: {
           fontSize: '$lg',
           color: '$gray100'
        },

        span:{
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        },
        
        button:{
            color: '$white',
            backgroundColor: '$green500',
            padding: '1.2rem',
            borderRadius: 6,
        },
    },

    '&:hover':{
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }   
});
