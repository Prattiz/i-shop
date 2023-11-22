import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
})

export const Header = styled('header', {
  padding: '3.2rem 2rem',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto', 
  display: 'flex',
  justifyContent: 'space-between',

  button:{
    color: '$gray400',
    backgroundColor: '$gray800',
    padding: '1.2rem',
    borderRadius: 6,
  },
})
