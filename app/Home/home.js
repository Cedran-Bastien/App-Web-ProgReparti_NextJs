import React from 'react';
import {Card} from "@/app/utils";
import Image from "next/image";



export const Home = () => {
    const image =  (<Image width={300} height={0} src={"/logo.png"} alt={"/logo.png"}/>)
    return (
            <Card title="Première approche du problème" titleColor={"text-blue-800"} width={"300"} content="c'est bon la" HtmlContent={image}/>
    )
}
