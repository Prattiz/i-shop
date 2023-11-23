import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const ButtonTrigger = styled(Dialog.Trigger, {

    marginLeft: 'auto',
    color: '$gray400',
    backgroundColor: '$gray800',
    padding: '1.2rem',
    borderRadius: 6,
})

export const CartConteiner = styled(Dialog.Content, {
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50rem',
    height: '100vh',
    background: '$gray800',
    boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
    padding: '4.5rem 3rem 3rem',
    
    display: 'flex',
    flexDirection: 'column',

    h2:{
        color: '$gray100',
        fontSize: '$lg',
        marginBottom: '2rem',
    },

    footer:{
        position: 'fixed',
        bottom: 30,
        right: 50,
        width: '40rem',

        div:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '$md',
            marginBottom: '1rem',

            span:{
                color: '$gray300',
            },

            'strong:last-child':{
                fontSize: '$xl',
            },

            'span:last-child':{
                fontSize: '$sml',
            },
        }  
    }
})

export const ButtonClose = styled(Dialog.Close, {
    position: 'absolute',
    right: '2.4rem',
    top: '2.4rem',
    background: 'none',
    color: '$gray400',
})

export const SelectedProducts = styled('section', {
    width: '100%',
    maxHeight: '45rem',
    margin: '0 4.8rem 2.4rem 4.8rem',
    display: "flex",
    flexDirection: 'column',
    gap: '2rem',
    overflow: 'auto',
})

export const Product = styled('div', {
    display: "flex",
    gap: '2rem',


    div:{
        display:'flex',
        flexDirection: 'column',
        fontSize: '$md',

        span:{
            color: '$gray300',
            lineHeight: '160%',
        },

        button:{
            marginTop: '2rem',
            background: 'none',
            color: '$green500',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: "flex-start",
            fontSize: '$sml'
        }
    },
}) 

export const ProductImage = styled('div', {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    width: 112,
    height:110,
    display: 'flex',
    justifyContent: "center",
})

export const ButtonHandle = styled('button', {
    background: '$green300',
    padding: '2rem 3.2rem',
    width: '100%',
    color: '$white',
    fontWeight: 'bold',
    borderRadius: 8,
})

