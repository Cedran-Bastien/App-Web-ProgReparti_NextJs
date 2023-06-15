'use client'

import {useRouter} from "next/navigation";
import {REACT_LOADABLE_MANIFEST} from "next/constants";

const Redirect = () => {
    useRouter().push('/Home')
}

export default function redirect() {
    return (
        <Redirect/>
    )
}