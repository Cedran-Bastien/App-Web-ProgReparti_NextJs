import React from 'react';


// Button to dowload what we have
const DownloadHandler  = ({title,filePath, buttonName}) => (
    <div className={"flex flex-col content-between gap-2"}>
        <h1>{title}</h1>
        <a className={"ml-8 w-max p-2.5 rounded hover:bg-cyan-500 duration-500 bg-cyan-900 "} href={filePath} target={"_blank"}> Download {buttonName} </a>
    </div>

)

export const Download = () => (
    <div className={"p-5 mb-8"}>
        <DownloadHandler title={"- Client demandant les calcules"} filePath='test.zip' buttonName={"Client"} />
    </div>
)