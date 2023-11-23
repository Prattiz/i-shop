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
    numberPrice: string,
    defaultPriceId: string, 
} 

interface CartContextProps{
    cartValues: ProductProps[]
}


export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({children}: ICartContextProvider){

    const [cartValues, setcartValues] = useState<ProductProps[]>([]) 


    return(
        <CartContext.Provider value={{cartValues}}>
            {children}
        </CartContext.Provider>
    )
}