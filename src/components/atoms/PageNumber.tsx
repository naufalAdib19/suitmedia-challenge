import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage } from "../../redux/action"
import { useState, useEffect } from 'react'

const PageNumber = () => {
    const itemsPerPage = useSelector((state: any) => state.reducer.totalItemsPerPage)
    const currentPage = useSelector((state: any) => state.reducer.currentPage)
    const [nowPage, setNowPage] = useState(1)
    const totalPages = 100/itemsPerPage;
    const pages: Array<number> = []
    const dispatch = useDispatch()

    for(let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    function pageOnClick(page: number) {
        dispatch(setCurrentPage(page))
    }

    /* useEffect(() => {
        dispatch(setCurrentPage(nowPage))
    }, [nowPage]) */


    return(
        <div className="flex gap-x-3">
            <p className="cursor-pointer" onClick={() => pageOnClick(1)}>&lt;&lt;</p>
            <p className="cursor-pointer" onClick={() => currentPage > 0 ? pageOnClick(currentPage-1) : ''}>&lt;</p>
            {
                pages.map((val) => {
                    return(
                        <div 
                        className={`cursor-pointer ${currentPage == val ? "font-bold" : ""}`}
                        onClick={() => pageOnClick(val)}
                        >{val}</div>
                    )
                })
            }
            <p className="cursor-pointer" onClick={() => currentPage < totalPages-1 ? pageOnClick(currentPage+1) : ''}>&gt;</p>
            <p className="cursor-pointer" onClick={() => pageOnClick(totalPages)}> &gt;&gt;</p>
        </div>
    )
}

export default PageNumber