import { buffer } from "stream/consumers";

type BtnProps = {
    title: string
}

export function Btn({title}: BtnProps){
    return <a className="bg-primary py-4 px-14 text-[#FFF] rounded-md">{title}</a>
}