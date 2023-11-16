'use client'
import { HomeContainer, HomeProduct } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';



import Camisa1 from "@/../public/C1.png";
import Camisa2 from "@/../public/C2.png";
import Camisa3 from "@/../public/C3.png";





export default function home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 40,  
    },
    
    loop: true, 
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
       <HomeProduct className="keen-slider__slide">
        <Image src={Camisa1} alt="" width={520} height={500}/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>79,90</span>
        </footer>
       </HomeProduct>
       <HomeProduct className="keen-slider__slide">
        <Image src={Camisa2} alt="" width={520} height={500}/>

        <footer>
          <strong>Camiseta 2</strong>
          <span>79,90</span>
        </footer>
       </HomeProduct>

       <HomeProduct className="keen-slider__slide">
        <Image src={Camisa3} alt="" width={520} height={500}/>

        <footer>
          <strong>Camiseta 3</strong>
          <span>79,90</span>
        </footer>
       </HomeProduct>
       <HomeProduct className="keen-slider__slide">
        <Image src={Camisa1} alt="" width={520} height={500}/>

        <footer>
          <strong>Camiseta 4</strong>
          <span>79,90</span>
        </footer>
       </HomeProduct>
       
    </HomeContainer>
  )
}
