import { HeaderContainer } from "./styles";
import { Handbag } from "@phosphor-icons/react";
import logo from "../../../public/logo.svg";
import Image from "next/future/image";


export function Header(){

    return(
        <HeaderContainer>
            <Image src={logo} alt="Ignite Shop" />
            <button><Handbag size={22} weight="bold"/></button>
        </HeaderContainer>
    )
}