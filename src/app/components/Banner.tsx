import { Btn } from "./Btn";

export function Banner() {
    return (
        <section className="bg-coverImage relative">
            <div className="px-3 md:px-0 bg-overlayBanner h-full opacity-[0.8]">
                <div className="max-w-[822px] mx-auto pt-12 text-[#FFF]">
                    <h2 className="text-4xl md:text-5xl">
                        Venha conhecer nossas promoções
                    </h2>
                    <h4 className="text-2xl mt-4 mb-9">
                        50% Off nos produtos
                    </h4>
                    <Btn title="Ver produto"/>
                </div>
            </div>
        </section>
    )
}