import { useState } from "react"

interface Props{
    src: string | null
    alt: string
    className?: string
    fallback: string
}

export default function SafeImg({src, alt, className, fallback}: Props){
    //読み込み
    const [failed, setFailed] = useState(false)
    //srcがnull/失敗したらフォールバック表示
    if(!src || failed) return <span>{fallback}</span>

    return (
        <img 
            src = {src}
            alt = {alt}
            className = {className}
            onError = {() => setFailed(true)}/>
    )
}