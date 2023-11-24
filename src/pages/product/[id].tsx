import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { useContext } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, DetailsContainer } from "../../styles/pages/product";

import { CartContext, ProductProps } from "../../context/context";

interface ProductPropsId {
  product: ProductProps,
}


export default function Product({ product }: ProductPropsId) {

  const { addProduct, disableButtonIfExists } = useContext(CartContext);


  function handleAddProduct(e: any, index: ProductProps){
    e.preventDefault()
    addProduct(index)
  }


  return (
    <>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          {
            disableButtonIfExists(product.id) == false? 
            <button onClick={(e) => handleAddProduct(e, product)}>
              Colocar na sacola
            </button>
          :
            <button disabled>
              Já está no seu carrinho
            </button>
          }
        </DetailsContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],

        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),

        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id
      }
    },

    revalidate: 60 * 60 * 1 
  }
}