import { HomeContainer, HomeProduct } from "@/styles/pages/home";
import Image from "next/image";
import Camisa1 from "@/../public/C1.png";
import Camisa2 from "@/../public/C2.png";
import Camisa3 from "@/../public/C3.png";





export default function home() {

  return (
    <HomeContainer>
       <HomeProduct>
        <Image src={Camisa1} alt="" width={520} height={500}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>79,90</span>
        </footer>
       </HomeProduct>
       <HomeProduct>
        <Image src={Camisa2} alt="" width={520} height={500}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>79,90</span>
        </footer>
       </HomeProduct>
       
    </HomeContainer>
  )
}
