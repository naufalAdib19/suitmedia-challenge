import NavigationList from "../atoms/NavigationList";
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isHamburgerButtonActive = useSelector((state: any) => state.reducer.isNavbarActive)
    
    return(
        <div className={`w-2/4 h-2/4 bg-orange-500 fixed top-[68px] right-0 z-50 flex items-center justify-center opacity-70 ${isHamburgerButtonActive ? "visible" : "invisible"}`}>
            <NavigationList/>
        </div>
    )
}

export default Sidebar;