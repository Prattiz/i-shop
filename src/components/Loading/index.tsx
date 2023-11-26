import { ComponentProps, useEffect, useState } from "react";
import { Background, SckeletonContainer } from "./styles";


export function SckeletonProduct({...props}: ComponentProps<typeof SckeletonContainer>){
    return(
        <SckeletonContainer {...props}>
            <Background/>
            <div>
                <Background />
                <Background />
            </div>
        </SckeletonContainer>
    )
};