'use client'
import React from 'react';
import {Card} from "@/app/utils";
import Image from "next/image";



export const Home = () => {
    const image =  (<Image width={1000} height={0} src={"/schema.png"} alt={"/schema.png"}/>)
    const image2 = (<Image className={"pb-5"} width={1000} height={0} src={"/schema2.png"} alt={"/schema2.png"}/>)
    return (
        <div>
            <Card title="Première approche du problème" titleColor={"text-blue-800"}  HtmlContent={image}/>
            <Card title="Fonctionnement definitif" titleColor={"text-blue-800"} HtmlContent={image2}/>
        </div>
    )
}
