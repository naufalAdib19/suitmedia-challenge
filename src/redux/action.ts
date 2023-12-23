export const setNavbarState = (data: any) => {
    return({
        type: "CLICK_HAMBURGER_BUTTON",
        payload: data
    })
}

export const setTotalItemsPerPage = (data: number) => {
    return({
        type: "CHANGES_TOTAL_ITEMS",
        payload: data
    })
}

export const setItemORders = (data: any) => {
    return({
        type: "CHANGES_ITEM_ORDER",
        payload: data
    })
}

export const setCurrentPage = (data: number) => {
    return({
        type: "CHANGES_PAGE",
        payload: data
    })
}