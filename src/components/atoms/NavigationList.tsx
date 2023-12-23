const NavigationList = () => {
    return(
        <div>
            <ul className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-5 text-base text-white">
                <li><a href="">Work</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li className="font-bold border-b-2 border-b-white"><a href="">Ideas</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavigationList