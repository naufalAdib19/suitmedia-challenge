import Navbar from '../organisms/Navbar'
import { useState, useEffect, Suspense, lazy} from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Sidebar from '../organisms/Sidebar'
import Banner from '../organisms/Banner'
import ProductSetting from '../organisms/ProductSetting'
import { useSelector } from 'react-redux'
import { apiTest } from '../../services'
import PageNumber from '../atoms/PageNumber'
import './HomeStyle.css'

const LazyComponent = lazy(() => import("../organisms/Cards"))

const Home = () => {
    type dataType = {
        small_image: {
            url: string
        }[],
        title: string,
        published_at: string,
        id: string 
    }[]
    const itemsPerPage = useSelector((state: any) => state.reducer.totalItemsPerPage)
    const currentPage = useSelector((state: any) => state.reducer.currentPage)
    const itemOrdersByDate = useSelector((state: any) => state.reducer.itemOrderByDate)
    const [data, setData] = useState<dataType>([])

    async function getData(x: number, y: number, z: string) {
        const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${x}&page[size]=${y}&append[]=small_image&append[]=medium_image&sort=${z}`
        try {
            const data = await apiTest(url)
            setData(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(itemOrdersByDate === 'newest') {
            getData(currentPage, itemsPerPage, '-published_at')
        } else {
            getData(currentPage, itemsPerPage, 'published_at')
        }
    }, [itemsPerPage, currentPage, itemOrdersByDate])

    useEffect(() => {
        getData(currentPage, itemsPerPage, 'published_at')
    }, [])

    return (
        <div>          
            <div>
                <Banner/>
            </div>
            <div>
                <ProductSetting/>
            </div>
            <div className='card-container px-12 sm:px-20'>
                {
                    data.map((val) => {
                        return(
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <LazyComponent img={val?.small_image[0]?.url} title={val?.title} date={val?.published_at} key={val?.id}/>
                            </Suspense>                            
                        )
                    })
                }
            </div>
            <div className='w-full flex justify-center mt-16'>
                <PageNumber/>
            </div>
            
            <br /><br />
        </div>
    )
}

export default Home