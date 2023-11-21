import Image from "next/image";
import { SucessContainer, SucessImage } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface SuccessProps{
  customerName: string,
  product:{
    name: string,
    imageUrl:string,
  }
}

export default function Success({customerName, product}: SuccessProps) {
  return(
    <SucessContainer>
      <h1>Compra efetuada!</h1>
      <SucessImage>
       <Image src={product.imageUrl} width={110} height={110} alt={product.name}/>
      </SucessImage>
      <p>
        Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href='/'>Voltar ao catálogo</Link>
    </SucessContainer>
  )
} 

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  const sessionId = String(query.session_id);

  if(!query.session_id){
    return{
      notFound: true
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props:{
      customerName,
      product:{
        name: product.name,
        imageUrl: product.images[0],
      },
    }
  }
}
