import React from 'react';
import {Card, CardAlert} from "@/app/utils";


// Parameters
const Parameters = ({command}) => {
    return (
        <div className={"flex flex-row gap-1"}>
            <p className={"underline"}>Run command : </p>
            <code>{command}</code>
        </div>
    )
}




// Button to dowload what we have
const DownloadHandler  = ({ filePath, buttonName}) => (
        (<div className={"flex flex-col content-between mb-6 gap-2"}>
            <a className={"ml-8 w-max p-2.5 rounded hover:bg-cyan-400 duration-500 bg-cyan-600 "} href={filePath} target={"_blank"}> Download {buttonName} </a>
        </div>)
)

export const Download = () => {
    const parCentral = [
        {name: "port", explain: "port where to export the service"},
    ]
    const parCalcule = [
        {name: "IP", explain: "IP of the central service"},
    ]
    const parClient = [
        {name: "IP", explain: "IP of the central service"},
    ]
    return (
        <div className={"p-5 mb-8 "}>
            <Card title={"Usage"} titleColor={"text-red-600"} content={"For all State off the architecture, Unzip the compress archive and run the Start.java file"} />
            <Card title={"Service calcul"} titleColor={"text-blue-800"} content={<Parameters command={"java Start [IP service central]"} />} HtmlContent={
                <DownloadHandler filePath={"service_calcule.zip"} buttonName={"Calculator"}/>
            }
            />
            <Card title={"Client asking calcule"} titleColor={"text-blue-800"} content={<Parameters command={"java Start [IP service central]"} />} HtmlContent={
                <DownloadHandler filePath='client.zip' buttonName={"Client"}/>
            }
            />
            <Card title={"Service central"} titleColor={"text-blue-800"} content={<Parameters command={"java Start [port du service]"} />} HtmlContent={
                <DownloadHandler filePath={"service_central.zip"} buttonName={"Server"}/>
            }
            />

        </div>
    )
}