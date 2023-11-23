import * as Dialog from "@radix-ui/react-dialog";
import { Handbag, X } from "@phosphor-icons/react";
import { 
    ButtonClose, ButtonTrigger, CartConteiner, SelectedProducts, 
    Product, ProductImage, ButtonHandle, Total 
} from "./styles";

import Image from "next/image";


import { useContext } from "react";
import { CartContext } from "../../context/context";

export function Cart(){

    const { cartValues, totalCart, handleRemove, totalPrice } = useContext(CartContext);

    const price = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(totalPrice)

    return(
        <Dialog.Root>
            <ButtonTrigger>
                {totalCart >= 1 && <Total>{totalCart}</Total>}
               <Handbag size={22} weight="bold"/>
            </ButtonTrigger>

            <Dialog.Portal>
                <CartConteiner>
                    <ButtonClose><X size={25} weight="bold"/></ButtonClose>
                    <h2>Sacola de compras</h2>
                    <main>
                        {totalCart <= 0 && <span>você não adicionou nada ao seu carrinho...</span>}

                        { 
                        cartValues.map((item) => (
                          
                        <SelectedProducts key={item.id}>
                            <Product>
                                <ProductImage>
                                    <Image src={item.imageUrl} width={100} height={100} alt={item.name} />
                                </ProductImage>

                                <div>
                                    <span>{item.name}</span>
                                    <strong>{item.price}</strong>
                                    <button onClick={() => handleRemove(item.id)}>Remover</button>
                                </div>
                            </Product>
                        </SelectedProducts>
                        ))  
                        }
                       
                    </main>

                    <footer>
                        <div>
                            <span>Quantidade</span>
                            <span>{totalCart} {totalCart <= 1 ? 'item' : 'itens'}</span>
                        </div>

                        <div>
                            <strong>Valor Total</strong>
                            <strong>{price}</strong>
                        </div>
                        <ButtonHandle disabled={totalCart <= 0}>Finalizar Compra</ButtonHandle>
                    </footer>  
                </CartConteiner>
            </Dialog.Portal>
        </Dialog.Root>
    )
}