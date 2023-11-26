import { styled } from '../../styles';


export const SckeletonContainer = styled('div', {
    width: 550,
    height: 550,
    display: 'grid',
    marginRight: '4rem',
    gridTemplateRows: '1fr 32px',

    div: {
      display: "grid",
      gridTemplateColumns: "330px 100px",
      justifyContent: "space-between",
    },
});

export const Background = styled('div', {

    backgroundColor: "$gray800",
    backgroundImage: "linear-gradient(90deg, $gray800, $gray700, $gray500)",
    backgroundSize: "200px 100%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    borderRadius: 8,
});