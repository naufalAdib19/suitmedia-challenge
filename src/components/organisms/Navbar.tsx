import Logo from '../atoms/Logo'
import { useMediaQuery } from 'react-responsive';
import Hamburger from '../atoms/Hamburger'
import NavigationList from '../atoms/NavigationList'

const Navbar = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
    })

    return(
        <div className="flex justify-between items-center px-12 sm:px-20 py-5 bg-orange-600">
            <div>
                <Logo/>
            </div>
            <div>
                {
                    isMobile ? <Hamburger/> : <NavigationList/>
                }
            </div>
        </div>
    )
}

export default Navbar