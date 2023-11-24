import { HeaderContainer } from "./styles";
import logo from "../../../public/logo.svg";
import Image from "next/future/image";
import { Cart } from "../Cart";
import { useRouter } from "next/router";


export function Header(){
    const { pathname } = useRouter();
    const noButton = pathname !== '/success';
    
    return(
        <HeaderContainer>
            <Image src={logo} alt="Ignite Shop"/>
            {noButton && <Cart/>}
        </HeaderContainer>
    )
}