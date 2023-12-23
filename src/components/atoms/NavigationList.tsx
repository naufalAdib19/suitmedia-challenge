import { useDispatch, useSelector } from 'react-redux';
import { setNavigationUser } from '../../redux/action';

const NavigationList = () => {
    const activeItem = useSelector((state: any) => state.reducer.userNavigation)
    const dispatch = useDispatch();

    const handleClick = (itemName: string) => {
        dispatch(setNavigationUser(itemName))
    };

    return(
        <div>
            <ul className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-5 text-base text-white">
            <li>
        <a href="/work" className={activeItem === 'work' ? 'active' : ''} onClick={() => handleClick('work')}>
          Work
        </a>
      </li>
      <li>
        <a href="/about" className={activeItem === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>
          About
        </a>
      </li>
      <li>
        <a href="/services" className={activeItem === 'services' ? 'active' : ''} onClick={() => handleClick('services')}>
          Services
        </a>
      </li>
      <li className={` ${activeItem === 'ideas' ? 'active' : ''}`}>
        <a href="/" onClick={() => handleClick('ideas')}>
          Ideas
        </a>
      </li>
      <li>
        <a href="/careers" className={activeItem === 'careers' ? 'active' : ''} onClick={() => handleClick('careers')}>
          Careers
        </a>
      </li>
      <li>
        <a href="/contact" className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>
          Contact
        </a>
      </li>
            </ul>
        </div>
    )
}

export default NavigationList