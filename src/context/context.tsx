import { ReactNode, createContext, useState } from "react";

interface ICartContextProvider{
    children: ReactNode,
}

export interface ProductProps{
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: string,
    numberPrice: number,
    defaultPriceId: string, 
} 

interface CartContextProps{
    cartValues: ProductProps[],
    handleRemove: (index: string) => void,
    addProduct: (product: ProductProps) => void,
    totalCart: number,
    totalPrice: number,
    disableButtonIfExists: (product: string) => boolean
}


export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({children}: ICartContextProvider){

    const [cartValues, setCartValues] = useState<ProductProps[]>([]);
    const totalCart = cartValues.length;

    const totalPrice = cartValues.reduce((total, product) => {
        return total + product.numberPrice;
    }, 0)
    
    function addProduct(product: ProductProps){
        setCartValues(state => [...state, product])
    }

    function handleRemove(index: string) {
        setCartValues((state) => state.filter(item => index !== item.id));
    }

    function disableButtonIfExists(product: string){
        return cartValues.some((item) => item.id === product)
        
    }


    return(
        <CartContext.Provider value={{cartValues, addProduct, totalCart, handleRemove, totalPrice, disableButtonIfExists}}>
            {children}
        </CartContext.Provider>
    )
}