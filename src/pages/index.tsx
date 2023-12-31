import Image from "next/future/image";
import { HomeContainer, HomeProduct } from "../styles/pages/home";
import { Handbag } from "@phosphor-icons/react";

import { GetStaticProps } from "next";
import Link from "next/link";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { useContext, useEffect, useState } from "react";

import { CartContext, ProductProps } from "../context/context";
import { SckeletonProduct } from "../components/Loading";



interface HomeProps {
  products: ProductProps[],
}

export default function Home({ products }: HomeProps) {

  const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => setLoading(false), 2000);

        return () => clearTimeout(timeOut);
    }, [])

  const { addProduct, disableButtonIfExists } = useContext(CartContext);
  


  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  });

  function handleAddProduct(e: any, product: ProductProps){
    e.preventDefault()
    addProduct(product)
  }


  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      
      { 
      // fake loading:
      // loading ? 
      // <>
      //   <SckeletonProduct />
      //   <SckeletonProduct /> 
      //   <SckeletonProduct />
      // </>
      //  : 
      products.map(product => {
        return (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <HomeProduct className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button 
                type="button" 
                disabled={disableButtonIfExists(product.id)}
                onClick={(e) => handleAddProduct(e, product)}>
                  <Handbag size={28} weight="bold"/>
                </button>
              </footer>
            </HomeProduct>
          </Link>
        )
      })
      } 
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 
  }
}
