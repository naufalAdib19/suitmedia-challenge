import { combineReducers } from 'redux'

type stateType = {
    isNavbarActive: boolean
    totalItemsPerPage: number
    itemOrderByDate: string
    currentPage: number
}

const initialState: stateType = {
    isNavbarActive: false,
    totalItemsPerPage: 10,
    itemOrderByDate: "oldest",
    currentPage: 1
}

type actionType = {
    type: String,
    payload: any
}

export type reducerType = {
    reducer: {
        state: stateType
    }
}

const Reducer = (state = initialState, action: actionType) => {
    switch(action.type) {
        case 'CLICK_HAMBURGER_BUTTON':
            return {
                ...state,
                isNavbarActive: action.payload
            };
        case 'CHANGES_TOTAL_ITEMS':
            return {
                ...state,
                totalItemsPerPage: action.payload
            };
        case 'CHANGES_ITEM_ORDER':
            return {
                ...state,
                itemOrderByDate: action.payload
            }
        case 'CHANGES_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer: Reducer
})

export default rootReducer