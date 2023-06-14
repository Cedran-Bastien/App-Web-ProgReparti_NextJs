import React from 'react';
import {Card, CardAlert} from "@/app/utils";


// Parameters
const Parameters = ({parameters}) => {
    let i = 1
    const html = parameters.map((item) => {
        return(
            <div>
                <p className={"pl-5"}>{i}. {item.name} : {item.explain}</p>
            </div>
        )
        i= i+1
    })

    return (
        <div>
            <p className={"underline"}>Parameters : </p>
            {html}
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
            <Card title={"Client defendant les calcules"} titleColor={"text-blue-800"} content={<Parameters parameters={parClient} />} HtmlContent={
                <DownloadHandler filePath='test.zip' buttonName={"Client"}/>
            }
            />
            <Card title={"Service central"} titleColor={"text-blue-800"} content={<Parameters parameters={parCentral} />} HtmlContent={
                <DownloadHandler filePath={"test.zip"} buttonName={"Server"}/>
            }
            />
            <Card title={"Service calculate"} titleColor={"text-blue-800"} content={<Parameters parameters={parCalcule} />} HtmlContent={
                <DownloadHandler filePath={"test.zip"} buttonName={"Calculator"}/>
            }
            />
        </div>
    )
}