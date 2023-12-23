import {useState} from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Navbar from './components/organisms/Navbar';
import Sidebar from './components/organisms/Sidebar';

type appProps = {
  children: React.ReactNode
}

function App(props: appProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    setIsScroll(true)

    if(latest > previous) {
        setHidden(true)
    } else {
        setHidden(false)
    }

    setTimeout(() => {
        setIsScroll(false)
    }, 700)

})
  
  return (
    <div>
      <div className='relative z-[100]'>    
          <motion.nav 
          variants={{
              default: { y:0, opacity: 1 },
              visible: { y:0, opacity: 0.8 },
              hidden: { y:"-100%", opacity: 0 },
          }}
          animate= {isScroll === false ? "default" : hidden ? "hidden" : "visible"} 
          transition={{duration: 0.35, ease:"easeInOut"}}
          className='navbar fixed top-0 w-full'>
              <Navbar/>
          </motion.nav>
          <Sidebar/>
      </div>
      {props.children} 
    </div>
  )
}

export default App
