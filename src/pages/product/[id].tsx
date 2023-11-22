import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, DetailsContainer } from "../../styles/pages/product";
import axios from "axios";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {

  const [ creatingCheckout, setCreatingCheckout ] = useState(false);

  async function handleBuyProduct() {
    try {

      setCreatingCheckout(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      });

      const { checkOutUrl } = response.data;
      
      
      window.location.href = checkOutUrl;

    } catch (err) {
      setCreatingCheckout(false)
      alert('falha ao redirecionar usuário');
    }
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

          <button disabled={creatingCheckout} onClick={handleBuyProduct}>
            Comprar agora
          </button>
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

        description: product.description,
        defaultPriceId: price.id
      }
    },

    revalidate: 60 * 60 * 1 
  }
}