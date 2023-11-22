import { HeaderContainer } from "./styles";
import { Handbag } from "@phosphor-icons/react";
import logo from "../../../public/logo.svg";
import Image from "next/future/image";
import { Cart } from "../Cart";


export function Header(){

    return(
        <HeaderContainer>
            <Image src={logo} alt="Ignite Shop"/>
            <Cart/>
        </HeaderContainer>
    )
}