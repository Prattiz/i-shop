import * as Dialog from "@radix-ui/react-dialog";
import { Handbag, X } from "@phosphor-icons/react";
import { ButtonClose, ButtonTrigger, CartConteiner, SelectedProducts, Product, ProductImage, ButtonHandle } from "./styles";
import Image from "next/image";

import test from '../../../public/Test-image.png';

export function Cart(){
    return(
        <Dialog.Root>
            <ButtonTrigger>
               <Handbag size={22} weight="bold"/>
            </ButtonTrigger>

            <Dialog.Portal>
                <CartConteiner>
                    <ButtonClose><X size={25} weight="bold"/></ButtonClose>
                    <h2>Sacola de compras</h2>
                    <main>
                        {/* <span>você não adicionou nada ao seu carrinho...</span> */}
                        <SelectedProducts>
                            <Product>
                                <ProductImage>
                                    <Image src={test} width={100} height={100} alt="Camisa x" />
                                </ProductImage>
                                <div>
                                    <span>Camiseta x</span>
                                    <strong>R$ 30</strong>
                                    <button>Remover</button>
                                </div>
                            </Product>
                        </SelectedProducts>
                       
                    </main>

                    <footer>
                        <div>
                            <span>Quantidade</span>
                            <span>3 itens</span>
                        </div>

                        <div>
                            <strong>Valor Total</strong>
                            <strong>30 R$</strong>
                        </div>
                        <ButtonHandle>Finalizar Compra</ButtonHandle>
                    </footer>  
                </CartConteiner>
            </Dialog.Portal>
        </Dialog.Root>
    )
}