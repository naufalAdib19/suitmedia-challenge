type propsType = {
    img: string,
    title: string,
    date: string
}

const Cards: React.FC<propsType> = ({img, title, date}) => {
    const maxLength = 50
    const textLength = title?.length

    function truncatedStrings(): string {
        if(textLength <= maxLength) {
            return title
        } else {
            return title?.substring(0, maxLength) + "..."
        }
    }

    return(
        <>
        <div className="max-w-[260px]  shadow-lg rounded-md mx-2 my-2 cursor-pointer">
            <div className="w-full">
                <img src={img} alt="" className="w-full h-[180px] rounded-md"/>
            </div>
            <div className="px-3 pb-7">
                <p className="mb-2 mt-2">{date?.substring(0, 10)}</p>
                <h1 className="text-xl font-semibold">{truncatedStrings()}</h1>
            </div>
        </div>
        </>
    )
}

export default Cards