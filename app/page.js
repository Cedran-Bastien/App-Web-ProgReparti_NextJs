'use client'

import {useRouter} from "next/navigation";

export default function redirect() {
    useRouter().push('/Home')
}