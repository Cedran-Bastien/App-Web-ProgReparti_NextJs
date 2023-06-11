'use client'
import React from "react";
import logo from  '../public/logo.png'
import {useRouter} from "next/navigation";
import Image from "next/image";

const Onglet = ({text, route}) => {
    return (
        <p className="hover:bg-cyan-400 px-3.5 py-2.5 cursor-pointer" onClick={route} >{text}</p>
    );
}

const NavMain = ({onglets}) => {
    const listOnglet = onglets.map((data) => <Onglet key={data.name} text={data.name} route={data.route}  />)
    return <nav className="flex flex-row back bg-cyan-600">{listOnglet}</nav>
}


export const Header = () => {
    const router = useRouter()
    const listOnglet = [{ name:"Home", route: () => {router.push('/Home')}  }, { name:"Download", route: () => {router.push('Download')}  }]
    return (
        <div>
            <Image src={logo} alt={'logo du site'} />
            <NavMain onglets={listOnglet} />
        </div>
    )
}