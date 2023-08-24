import Image from "next/image";
import Logo from '../assets/img/logo/1.png'

export function Brands(){
    return (
        <section className="max-w-[1280px] mt-[78px] mx-auto">
            <h3 className="text-primary font-bold text-3xl text-center">Navegue por marcas</h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-[60px]">
                <div className="w-[211px] h-[211px] shadow shadow-[0px 7px 20px 0px rgba(0, 0, 0, 0.13)] flex justify-center items-center rounded-full">
                    <Image src={Logo} alt=""/>
                </div>
                <div className="w-[211px] h-[211px] shadow shadow-[0px 7px 20px 0px rgba(0, 0, 0, 0.13)] flex justify-center items-center rounded-full">
                    <Image src={Logo} alt=""/>
                </div>
                <div className="w-[211px] h-[211px] shadow shadow-[0px 7px 20px 0px rgba(0, 0, 0, 0.13)] flex justify-center items-center rounded-full">
                    <Image src={Logo} alt=""/>
                </div>
                <div className="w-[211px] h-[211px] shadow shadow-[0px 7px 20px 0px rgba(0, 0, 0, 0.13)] flex justify-center items-center rounded-full">
                    <Image src={Logo} alt=""/>
                </div>
                <div className="w-[211px] h-[211px] shadow shadow-[0px 7px 20px 0px rgba(0, 0, 0, 0.13)] flex justify-center items-center rounded-full">
                    <Image src={Logo} alt=""/>
                </div>
                
            </div>
        </section>
    )
}