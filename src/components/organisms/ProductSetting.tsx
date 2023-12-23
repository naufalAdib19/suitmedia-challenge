import { useDispatch, useSelector } from "react-redux"
import { setItemORders, setTotalItemsPerPage, setCurrentPage } from "../../redux/action"

const ProductSetting = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state: any) => state.reducer.currentPage)
    const totalItemsPerPage = useSelector((state: any) => state.reducer.totalItemsPerPage)
    const x = totalItemsPerPage*(currentPage-1)+1
    const y = totalItemsPerPage*(currentPage)
    
    function onItemsPerPageChanges(event: any) {   
        dispatch(setTotalItemsPerPage(event.currentTarget.value))
        dispatch(setCurrentPage(1))
    }

    function onItemOrdersByDate(event: any) {
        dispatch(setItemORders(event.target.value))
    }

    return(
        <div className=" px-12 sm:px-20 flex justify-between items-center py-12">
            <p>Showing {x} - {y} of 100</p>
            <div className="flex gap-x-10">
                <div className="flex gap-x-4 items-center">
                    <label htmlFor="totalItemsPerPage">Show per page</label>
                    <select id="totalItemsPerPage" name="totalItemsPerPage" className="w-[90px] border border-slate-400 rounded-full px-2 py-1" 
                    onChange={onItemsPerPageChanges}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="flex gap-x-4 items-center">
                    <label htmlFor="itemOrders">Sort By</label>
                    <select id="itemOrders" name="itemOrders" className="w-[100px] border border-slate-400 rounded-full px-2 py-1" 
                    onChange={onItemOrdersByDate}>
                        <option value="oldest">Oldest</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ProductSetting