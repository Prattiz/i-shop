import Image from "next/image";
import { SucessContainer, SucessImage, SucessImageContent } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";


interface SuccessProps{
  customerName: string,
  Images: string[],
}

export default function Success({customerName, Images}: SuccessProps) {
  const totalProducts = Images.length; 

  return(
    <SucessContainer>
      <h1>Compra efetuada!</h1>
      <SucessImageContent>
        {
          Images.map((item, key)=> (
            <SucessImage key={key}>
              <Image src={item} width={110} height={110}/>
            </SucessImage>
          ))
        }
      </SucessImageContent>
      
      

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de <strong>{totalProducts}</strong> {totalProducts > 1? 'camisetas ': 'camiseta '} 
          já está a caminho da sua casa.
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
  const Images = session.line_items.data.map(item => {
    const products = item.price.product as Stripe.Product;

    return products.images[0]
  });

  return {  
    props:{
      customerName,
      Images,
    }
  }
}
