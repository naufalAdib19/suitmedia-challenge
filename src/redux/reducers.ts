import { combineReducers } from 'redux'

type stateType = {
    isNavbarActive: boolean
}

const initialState: stateType = {
    isNavbarActive: false
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
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer: Reducer
})

export default rootReducer