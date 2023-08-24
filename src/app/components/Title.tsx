type TitleProps = {
    title: string
}

export function Title({title}: TitleProps) {
    return (
        <div className="flex justify-center items-center gap-9">
            <div className="bg-[#DEDEDE] w-[360px] h-[1px] hidden md:block"></div>
            <h3 className="text-primary font-bold text-2xl md:text-3xl">{title}</h3>
            <div className="bg-[#DEDEDE] w-[360px] h-[1px] hidden md:block"></div>
        </div>
    )
}