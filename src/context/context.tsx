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
    cartValues: ProductProps[],
    addProduct: (product: ProductProps) => void,
    totalCart: number,
}


export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({children}: ICartContextProvider){

    const [cartValues, setcartValues] = useState<ProductProps[]>([]);
    const totalCart = cartValues.length;
    
    function addProduct(product: ProductProps){
        setcartValues(state => [...state, product])
    }


    return(
        <CartContext.Provider value={{cartValues, addProduct, totalCart}}>
            {children}
        </CartContext.Provider>
    )
}