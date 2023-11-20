import { useRouter } from "next/router";
import { DetailsContainer, ImageContainer, ProductContainer } from "../../styles/pages/product";
import Image from "next/image";

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
     
      </ImageContainer>

      <DetailsContainer>
        <h1>Camiseta X</h1>
        <span>sla reais</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquid expedita ex recusandae quis eius </p>
        <button>Comprar</button>
      </DetailsContainer>
    </ProductContainer>
  )
}
