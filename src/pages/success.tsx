import Image from "next/image";
import { SucessContainer, SucessImage } from "../styles/pages/success";
import Link from "next/link";

export default function Success() {
  return(
    <SucessContainer>
      <h1>Compra efetuada!</h1>
      <SucessImage>
       
      </SucessImage>
      <p>
        Uhuul <strong>Thiago Pratti</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href='/'>Voltar ao catálogo</Link>
    </SucessContainer>
  )
} 
