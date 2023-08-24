import { Btn } from "./Btn";
import { Title } from "./Title";

export function Partners() {
    return (
        <section className="max-w-[1280px]  mx-auto">

            <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4 justify-between items-center">
                <div className="relative bg-coverPartners w-full h-full md:w-[574px] md:h-[350px] rounded-[20px]">
                    <div className="flex flex-col justify-center py-4 md:py-0 items-start h-full px-10 text-[#FFF]">
                        <div className="absolute bg-overlayBanner bottom-0 left-0 w-full md:h-[284px] rounded-[20px] opacity-[0.8] "></div>
                        <h3 className="text-[40px] font-bold leading-normal z-10">Parceiros</h3>
                        <p className="mt-2 mb-8 font-normal z-10 w-[181px]">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <a href="#" className="z-10 bg-primary py-3 px-6 text-[#FFF] rounded-md">
                            Confira
                        </a>
                    </div>
                </div>

                <div className="relative bg-coverPartners w-full h-full md:w-[574px] md:h-[350px] rounded-[20px]">
                    <div className="flex flex-col justify-center py-4 md:py-0 items-start h-full px-10 text-[#FFF]">
                        <div className="absolute bg-overlayBanner bottom-0 left-0 w-full md:h-[284px] rounded-[20px] opacity-[0.8] "></div>
                        <h3 className="text-[40px] font-bold leading-normal z-10">Parceiros</h3>
                        <p className="mt-2 mb-8 font-normal z-10 w-[181px]">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <a href="#" className="z-10 bg-primary py-3 px-6 text-[#FFF] rounded-md">
                            Confira
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-[60px] flex flex-col items-center">
                <Title title="Produtos relacionados" />
                <span className="text-[#3F3F40] font-bold leading-normal text-[15px]">Ver todos</span>
            </div>

            <div className="flex flex-col px-4 md:px-0 gap-4 md:flex-row justify-between items-center mt-[88px]">
                <div className="relative bg-coverPartners w-full h-full md:w-[574px] md:h-[350px] rounded-[20px]">
                    <div className="flex flex-col justify-center py-4 md:py-0 items-start h-full px-10 text-[#FFF]">
                        <div className="absolute bg-overlayBanner bottom-0 left-0 w-full h-full md:h-[284px] rounded-[20px] opacity-[0.8] "></div>
                        <h3 className="text-[40px] font-bold leading-normal z-10">Produtos</h3>
                        <p className="mt-2 mb-8 font-normal z-10 w-[181px]">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <a href="#" className="z-10 bg-primary py-3 px-6 text-[#FFF] rounded-md">
                            Confira
                        </a>
                    </div>
                </div>

                <div className="relative bg-coverPartners w-full h-full md:w-[574px] md:h-[350px] rounded-[20px]">
                    <div className="flex flex-col justify-center py-4 md:py-0 items-start h-full px-10 text-[#FFF]">
                        <div className="absolute bg-overlayBanner bottom-0 left-0 w-full h-full md:h-[284px] rounded-[20px] opacity-[0.8] "></div>
                        <h3 className="text-[40px] font-bold leading-normal z-10">Produtos</h3>
                        <p className="mt-2 mb-8 font-normal z-10 w-[181px]">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <a href="#" className="z-10 bg-primary py-3 px-6 text-[#FFF] rounded-md">
                            Confira
                        </a>
                    </div>
                </div>
            </div>



        </section>
    )
}