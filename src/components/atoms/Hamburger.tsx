import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNavbarState } from "../../redux/action"

const Hamburger = () => {
    const firstDiv = useRef<HTMLDivElement>(null)
    const secondDiv = useRef<HTMLDivElement>(null)
    const thirdDiv = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const isHamburgerButtonActive = useSelector((state: any) => state.reducer.isNavbarActive)

    function onClickHamurgerButton() {
        if(isHamburgerButtonActive) {
            firstDiv.current!.style.transform = "rotate(0deg)"
            secondDiv.current!.style.transform = "scale(1)"
            thirdDiv.current!.style.transform = "rotate(0deg)"
        } else {
            firstDiv.current!.style.transform = "rotate(45deg)"
            secondDiv.current!.style.transform = "scale(0)"
            thirdDiv.current!.style.transform = "rotate(-45deg)"
        }
        dispatch(setNavbarState(!isHamburgerButtonActive))
    }
    
    return(
        <div className="flex flex-col gap-y-[5px]" onClick={onClickHamurgerButton}>
            <div className="w-[25px] h-[3px] bg-white origin-top-left transition duration-300" ref={firstDiv}></div>
            <div className="w-[25px] h-[3px] bg-white transition duration-300" ref={secondDiv}></div>
            <div className="w-[25px] h-[3px] bg-white origin-bottom-left transition duration-300" ref={thirdDiv}></div>
        </div>
    )
}

export default Hamburger