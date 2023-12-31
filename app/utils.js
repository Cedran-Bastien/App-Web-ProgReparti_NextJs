import Image from "next/image";
import React from "react";

export const Card = ({title, titleColor, content, HtmlContent}) => (
        <div className={"m-10 p-5 flex flex-col content-around border-solid border-2 border-black rounded-lg gap-4 "} >
            <h1 className={"text-2xl font-bold "+ titleColor}>{title} :</h1>
            <div>{content}</div>
            <div>
                {HtmlContent}
            </div>

        </div>
)
