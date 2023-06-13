import React from 'react';
import Image from "next/image";

const Card = ({title, content, imagePath, width}) => {
    const image = imagePath != null ? <Image width={width} height="0" src={imagePath} alt={imagePath}/> : ""
    console.log(image)
    return (

        <div className="m-10 p-5 flex flex-col content-around border-solid border-2 border-black rounded-lg gap-4">
            <h1 className={"text-2xl text-blue-800 font-bold"}>{title} :</h1>
            <p>{content}</p>
            {image}
        </div>
    )
}

export const Home = () => (
    <Card title="Première approche du problème" width={"300"} content="c'est bon la" imagePath="/logo.png"/>
)
